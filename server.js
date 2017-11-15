const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const twilio = require('twilio');
const profile = require('./profile');
const app = express();
const GoogleSpreadsheet = require('google-spreadsheet');
const async = require('async');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
const PORT = process.env.PORT || 80;

const path = require('path');
const doc = new GoogleSpreadsheet(
  '1Ull9LD2aGGt9p0UEscvYP69IATLcTr6c1boluKT20Rk'
);
var sheet;
let newRow;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static assets
app.use(express.static(path.resolve(__dirname, 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// googlesheets= https://sheets.googleapis.com/v4/spreadsheets
// //instead of using res.send we can use,
// //res.render to send the output of the template by filename
// app.get('/contact', (req, res) => {

// });

app.get('/contact', (req, res) => {
  res.send('OK');
});

app.post('/contact', (req, res) => {
  const twilioCreds = require('./src/credentials/twilio-credentials.json');

  const TwilioClient = twilio(twilioCreds.accountSid, twilioCreds.authToken);

  TwilioClient.messages
    .create({
      to: '+18707611772',
      from: '+18705659113',
      body: req.body.name + ' says ' + req.body.message
    })
    .then(message => console.log(message.sid));

  async.series(
    [
      function setAuth(step) {
        // see notes below for authentication instructions!
        var creds = require('./src/credentials/google-api-key.json');
        // OR, if you cannot save the file locally (like on heroku)

        doc.useServiceAccountAuth(creds, step);
      },
      function getInfoAndWorksheets(step) {
        doc.getInfo(function(err, info) {
          // console.log('Loaded doc: ' + info.title + ' by ' + info.author.email);
          sheet = info.worksheets[0];
          // console.log(
          //   'sheet 1: ' +
          //     sheet.title +
          //     ' ' +
          //     sheet.rowCount +
          //     'x' +
          //     sheet.colCount
          // );
          step();
        });
      },
      function workingWithRows(step) {
        // google provides some query options
        sheet.getRows(
          {
            offset: 1,
            limit: 20,
            orderby: 'name'
          },
          function(err, row) {
            // console.log('Read ' + row.length + ' rows');
            newRow = row.length;
            step();
          }
        );
      },

      function workingWithCells(step) {
        sheet.getCells(
          {
            'min-row': newRow + 2,
            'return-empty': true
          },
          function(err, cells) {
            var cell = cells[0];
            // console.log(
            //   'Cell R' + cell.row + 'C' + cell.col + ' = ' + cell.value
            // );

            // // bulk updates make it easy to update many cells at once
            // req.body.name
            cells[0].value = req.body.name;
            cells[1].value = req.body.email;
            cells[2].value = req.body.message;
            // cells[0].value = 'Jonathan';
            sheet.bulkUpdateCells(cells); //async

            step();
          }
        );
      }
    ],
    function(err) {
      if (err) {
        console.log('Error: ' + err);
      } else {
        res.send('OK');
      }
    }
  );
});
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});

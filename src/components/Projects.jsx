import vstda from '../assets/vstda.jpg';
import vstdaAdded from '../assets/vstda-added.jpg';
import cassini from '../assets/cassini.jpg';
import cassiniInside from '../assets/cassiniInside.jpg';
import fitness from '../assets/fitness.jpg';
import realResults from '../assets/realResultsHome.jpg';
import speakeasy from '../assets/speak-easy.jpg';
import speakeasyDrink from '../assets/speakeasy2.jpg';

export const Projects = [
  {
    title: 'Hackathon',
    libraries: 'ReactJS / NodeJS/ Spotify API / SASS',
    summary:
      'Tasked to build an app in React, I built an app that will generate a spotify playlist and a cocktail based off of the users mood',
    challenge:
      "The most challenging part was the time constraint on this project. With only 72 hours I had to build a fullstack React app with two third-party API's. I use a cocktail API and Spotify's API to create an app that generates a playlist and cocktail based off of the users mood.",
    solution:
      "To achieve the functionality of this app, I carefully mapped out my components and figured out how to pass the corresponding props and data down to each one. In order to generate the random playlist, I had the user choose a mood. I then stored that selection in a variable and passed it back through to Spotify's API and used that as a query. Spotify then would return an array of 20 playlists matching that mood. Next I created a random number generator between the numbers of 0 and 20 and used that to randomly generate a playlist for the user.",
    links: {
      site: 'https://serene-everglades-94130.herokuapp.com/',
      github: 'https://github.com/jcast90/speakeasy-react-hackathon'
    },
    img: speakeasy,
    img2: speakeasyDrink
  },
  {
    title: 'VSTDA',
    libraries: 'ReactJS / Bootstrap',
    summary:
      'Using React, I built a simple to-do app with basic functionality for adding, editing, and deleting to-do items.',
    challenge:
      'For this project, I had to create a simple todo App. It sounded simple enough, however, I needed to build it using React and add specific functionality to it. The main functionality was for the user to be able to add an item, delete an item, and edit an item. This being one of my first React projects, there were a lot of challenges that presented themselves. The main one being how many components do I make and how do I pass the props down to the right component.',
    solution:
      'Although there was a lot of struggle on this project, I definitely learned a lot about React. My first mistake was trying to break it down into way too many components, I had to take a step back and compile it down to fewer components. Another topic I became familiar with was how states and props work with several components and how to properly pass them down. Overall this was a fun project to work with and helped me understand the world of React a lot more.',
    links: {
      site: 'https://desolate-stream-60822.herokuapp.com/',
      github: 'https://github.com/jcast90/startnow-react100-vstda'
    },
    img: vstda,
    img2: vstdaAdded
  },
  {
    title: 'Cassini: A Responsive Framework',
    libraries: 'HTML / CSS / SASS / JavaScript / jQuery / Gulp',
    summary:
      'Bootstrap is too robust for most use cases, so I built a more light weight responsive framework.',
    challenge:
      'This was a class project in which we had to create a responsive framework. The challenge here was figuring out how to create a framework that would be responsive for all devices but also be light weight.',
    solution:
      'Creating a responsive framework was a lot harder than I imagined. I was the team lead on this project and designated everyone with tasks and made sure deadlines were met. I was in charge of actually making it responsive. To do this, I had to figure out the various breakpoints and then create a grid system that would work on all devices. Not only did I have to create a responsive grid, but I also had to create a JavaScript plugin and CSS components. In about 30 days we had a responsive framework built, the next step was to build the support page using WordPress. Here is a link to our support page:',
    links: {
      site: 'http://www.cassini.site',
      github: ''
    },
    img: cassini,
    img2: cassiniInside
  },
  {
    title: 'Real Results',
    libraries: 'UI/UX / Graphic Design / Custom WordPress / CSS',
    summary:
      'A client, who is a personal trainer, had an outdated website and needed a more modern clean look. I delivered a modern, clean design and website for him.',
    challenge:
      'I was approached to re-design a personal trainers website. The challenge was to take his current site and come up with a new modern look and feel for his industry.',
    solution:
      'To do this, I researched some of his competitors to come up with a more modern design. For starters, his old site was dark with a typewriter font choice and there was no organization. One of the challenges was organizing all the content properly and then coming up with a color scheme. After going back and forth with wireframes and designs, we finally settled on one. This new design is more organized, has a better user experience, and is pleasant to look at.',
    links: {
      site: 'http://edityourbody.com/',
      github: ''
    },
    img: fitness,
    img2: realResults
  }
];

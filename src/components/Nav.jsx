import React, { Component } from 'react';

export class Nav extends Component() {
  render() {
    return (
      <div class="container">
        <div class="wrapper">
          <div class="content">
            <i class="fa fa-bars menu-toggle" />

            <header>
              <h1>Section</h1>
            </header>
            <main class="view view--1">
              <img src="http://placehold.it/640x400" />
              <img src="http://placehold.it/640x400" />
              <img src="http://placehold.it/640x400" />
              <img src="http://placehold.it/640x400" />
            </main>
          </div>
          <ul class="menu">
            <li>
              <a class="item item-0 menu-toggle">
                <i class="fa fa-times" />
              </a>
            </li>
            <li>
              <a class="item item-1">
                <i class="fa fa-car" />
              </a>
            </li>
            <li>
              <a class="item item-2">
                <i class="fa fa-heart" />
              </a>
            </li>
            <li>
              <a class="item item-3">
                <i class="fa fa-cloud" />
              </a>
            </li>
            <li>
              <a class="item item-4">
                <i class="fa fa-coffee" />
              </a>
            </li>
            <li>
              <a class="item item-5">
                <i class="fa fa-dribbble" />
              </a>
            </li>
            <li>
              <a class="item item-6">
                <i class="fa fa-book" />
              </a>
            </li>
            <li>
              <a class="item item-7">
                <i class="fa fa-book" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

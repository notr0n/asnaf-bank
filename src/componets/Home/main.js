import React, { Component } from 'react';
import NavBar from './componets/navbar.js';
import Main from './componets/main.js';
import DES from './componets/description.js';

import './styles/App.css';
import './styles/bs/css/bootstrap-iso.css';

export default class Home extends Component {
  render() {
    return (
      <div>
            <NavBar/>
            <Main/>
            <div class="bootstrap-iso">
              <div class="hidden-sm hidden-xs">
                <DES/>
              </div>
            </div>
      </div>
    );
  }
}

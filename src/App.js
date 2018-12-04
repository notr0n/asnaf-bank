import React, { Component } from 'react';
import {Switch,Route , BrowserRouter} from 'react-router-dom';
import NavBar from './componets/navbar.js';
import Show from './componets/show.js';
import Des from './componets/des.js';
import Home from './componets/Home/main.js';
import Login from './componets/Admin/login/login.js';
import Panel from './componets/Admin/panel/panel.js';

export default class App extends Component {
  render() {
    return (
  <BrowserRouter>
      <Switch>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/list" component={Show} />
        <Route path="/post/" component={Des} />
        <Route path="/login/" component={Login} />
        <Route path="/panel/" component={Panel} />
      </div>
    </Switch>
  </BrowserRouter>
    );
  }
}

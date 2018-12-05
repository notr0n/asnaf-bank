import React , {Component} from 'react';
import {Box } from 'gestalt';
import {Switch,Route , BrowserRouter} from 'react-router-dom';
import {Tab,Tabs} from "react-bootstrap";
import HomeTab from './Home/home.js';
import Add from './Add/add.js';

import './panel.css';


export default class Panel extends Component {
  render() {
    return (
  <div>
      <Box heigth={220} color="darkGray">
          <center>
            <h2>ادمین</h2>
          </center>
      </Box>
      <div class="bootstrap-iso">
      <div class="col-lg-2"></div>
      <div class="col-lg-8">
      <Box marginTop={7} color="white" minHeigth="500">
      <Tabs defaultActiveKey={0} id="uncontrolled-tab-example">
          <Tab eventKey={0} title="خانه">
                <HomeTab />
          </Tab>
          <Tab eventKey={1} title="لیست اصناف">

          </Tab>
          <Tab eventKey={2} title="صنف جدید">

          </Tab>
          <Tab eventKey={3} title="تعرفه">

          </Tab>
          <Tab eventKey={4} title="اضافه کردن">
              <Add />
          </Tab>
      </Tabs>
      </Box>
      </div>
      <div class="col-lg-2"></div>
      </div>
  </div>
    );
  }
}

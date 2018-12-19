import React , {Component} from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import LocalHospital from '@material-ui/icons/LocalHospital';
import Style from '@material-ui/icons/Style';
import Gavel from '@material-ui/icons/Gavel';
import Fastfood from '@material-ui/icons/Fastfood';
import Palette from '@material-ui/icons/Palette';
import Home from '@material-ui/icons/Home';
import Book from '@material-ui/icons/Book';
import CardTravel from '@material-ui/icons/CardTravel';
import Commute from '@material-ui/icons/Commute';
import Description from '@material-ui/icons/Description';
import Theaters from '@material-ui/icons/Theaters';
import axios from 'axios';
import {Image , Text , Sticky} from 'gestalt';
import Offers from './offers.js';

import '../styles/gestalt.css';
import '../styles/App.css';
import '../styles/bs/css/bootstrap-iso.css';

export default class Main extends Component {
  state = {
    persons: []
  }

  async componentDidMount() {
    await axios.get(`http://localhost/api/home.php`)
    .then(res => {
    const persons = res.data;
    this.setState({ persons });
    })
    }
    
  render() {
    if(this.state.persons.length < 0) return null
    return (
      <div class="bootstrap-iso">
        <center>
          <Image
          src=""
          />
        </center>
          <div class="col-lg-1 col-md-1"></div>
          <div class="col-lg-9 col-md-9 col-sm-6 col-xs-12 t0">
            <div dir="rtl">
              <p class="t1">برگزیده</p>
            </div>
            <hr/>
            { this.state.persons.map(person =>
              <Offers
                imgURL={person.Pic}
                STAR={person.StarRate}
                Title={person.Title}
              />)}
            <Offers/><Offers/>
            <Offers/><Offers/><Offers/>
          </div>
          <div class="col-lg-2 col-md-2 hidden-xs col-sm-3 t0" >

          <Paper>
            <MenuList>

            <MenuItem>
              <ListItemIcon>
                <LocalHospital/>
              </ListItemIcon>
              <ListItemText><div class="font0">پزشکی</div></ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Style/>
              </ListItemIcon>
              <ListItemText><div class="font0">پوشاک</div></ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText><div class="font0">خانه و تاسیسات</div></ListItemText>
            </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Gavel/>
                </ListItemIcon>
                <ListItemText><div class="font0">خدمات دولتی</div></ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Fastfood/>
                </ListItemIcon>
                <ListItemText><div class="font0">رستوران</div></ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Palette/>
                </ListItemIcon>
                <ListItemText><div class="font0">آرایشی</div></ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Book/>
                </ListItemIcon>
                <ListItemText><div class="font0">آموزشی</div></ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <CardTravel/>
                </ListItemIcon>
                <ListItemText><div class="font0">گردشگری</div></ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Commute/>
                </ListItemIcon>
                <ListItemText><div class="font0">حمل و نقل</div></ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Description/>
                </ListItemIcon>
                <ListItemText><div class="font0">چاپ</div></ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Theaters/>
                </ListItemIcon>
                <ListItemText><div class="font0">نمایش </div></ListItemText>
              </MenuItem>
            </MenuList>

            </Paper>
          </div>
      </div>
    );
  }
}

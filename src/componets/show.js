import React, { Component } from 'react';
import {Box, Text , Icon , Button , Image} from 'gestalt';
import Stars from './star.js';
import NavBar from './navbar.js';

import '../styles/App.css';
import '../styles/bs/css/bootstrap-iso.css';
import '../styles/gestalt.css';

export default class Show extends Component {
  render() {
    return (
      <div>
          <NavBar/>
          <div class="bootstrap-iso">
              <div class="col-lg-4 hidden-md hidden-sm hidden-xs">
                  <Box color="watermelon" height={190} marginTop={10}>
                      <p styles={{'color':'white'}}><center>ADS</center></p>
                      <hr/>
                  </Box>
              </div>
              <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                  <Box color="olive" height={190} marginTop={10}>
                      <div dir="rtl">

                        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 vl ml">

                        </div>
                        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8 vl ml" dir="rtl">
                          <Box marginTop={5}>
                            <p class="t1"><center>عنوان</center></p>
                            <center><Stars/></center>
                            <Box marginTop={1}>
                              <Button color="transparent" text="اطلاعات تماس" />

                            </Box>
                          </Box>
                        </div>
                        <div class="visible-lg visible-md visible-sm visible-xs vl ml">
                          <Box maxWidth={131} height={131}>
                            <div class="visible-lg visible-md hidden-sm hidden-xs vl ml">
                              <Image
                                src="http://localhost/uni/p1/logo-placeholder.gif"
                              />
                            </div>
                          </Box>
                        </div>

                      </div>
                      <br/>
                      <div dir="rtl">
                         <Box alignItems="center" display="flex" marginTop={-1}>
                            <Box marginRight={1} padding={1}>
                               <Icon icon="location" accessibilityLabel="location" color="white" />
                            </Box>
                            <Text align="center" bold color="white">
                            ایران - تهران - منطقه 5 - بزرگراه کاشانی
                            </Text>
                        </Box>
                      </div>
                  </Box>
              </div>
          </div>
      </div>
    );
  }
}

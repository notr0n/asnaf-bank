import React, { Component } from 'react';
import {Box , Image , Icon,Text} from 'gestalt';
import Flayout1 from './flayout.js';
import Stars from './star.js';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Phone from '@material-ui/icons/Phone';
import PinDrop from '@material-ui/icons/PinDrop';
import Web from '@material-ui/icons/Web';
import MailOutline from '@material-ui/icons/MailOutline';
import Public from '@material-ui/icons/Public';
import NearMe from '@material-ui/icons/NearMe';
import Swiper from 'react-id-swiper';
import Map from './map.js';
import NavBar from './navbar.js';

import '../styles/bs/css/bootstrap-iso.css';
import '../styles/gestalt.css';
import '../styles/swiper.css';

export default class Des extends Component {
  render() {
    const params = {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      pagination: {
        el: '.swiper-pagination'
      }
    };
    return (
    <div>
      <NavBar/>
      <div class="bootstrap-iso">
          <Box color="white" height={120} marginTop={6}>
            <div class="col-lg-2 col-md-2 col-sm-2 hidden-xs">
                    <Flayout1/>
            </div>
            <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                <div dir="rtl">
                  <div class="hidden-xs">
                    <h3>این یک عنوان نمونه است</h3>
                    <Stars/>
                  </div>
                </div>
                <div class="visible-xs">
                  <center>
                      <h3>این یک عنوان نمونه است</h3>
                      <Stars/>
                  </center>
                </div>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-2">
                <Box maxWidth={115} height={115}>
                  <div class="visible-lg visible-md visible-sm hidden-xs vl ml">
                    <Image
                      src="http://localhost/uni/p1/logo-placeholder.gif"
                    />
                  </div>
            </Box>
            </div>
          </Box>
          <div >
              <div class="col-lg-6 col-md-6 hidden-sm hidden-xs">
                  <Box marginTop={5}>
                    <Paper>
                    <Map
                      isMarkerShown
                      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                      loadingElement={<div style={{ height: `100%` }} />}
                      containerElement={<div style={{ height: `300px` }} />}
                      mapElement={<div style={{ height: `100%` }} />}
                    />


                    </Paper>
                  </Box>
              </div>

              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <Box marginTop={5}>
                  <Paper>
                      <Box color="watermelon" height={40}>
                          <center>
                              <div class="f001">اطلاعات تماس</div>
                          </center>
                      </Box>
                          <div>
                            <div class="col-lg-8">
                            <Box marginTop={5}>
                            <Text align="center" bold color="darkGray">


          ایران - تهران - م. ونک - خ. برزیل شرقی - خ. شمس لاهیجانی (نیلو) - پلاک بین 12 و 14 - ساختمان نیلو (درب تک زنگ)
                            </Text>
                            </Box>
                            </div>
                            <div class="col-lg-4" dir="rtl">
                              <Box alignItems="center" display="flex" marginTop={5}>
                                 <Box padding={1}>
                                    <ListItemIcon>
                                        <PinDrop/>
                                    </ListItemIcon>
                                 </Box>
                                 <Text align="center" bold color="darkGray">
                                    آدرس
                                 </Text>
                              </Box>
                            </div>
                          </div><hr/>

                          <div>
                            <div class="col-lg-8">
                            <Box marginTop={5}>
                            <Text align="center" bold color="darkGray">
                               09123456789
                            </Text>
                            </Box>
                            </div>
                            <div class="col-lg-4" dir="rtl">
                              <Box alignItems="center" display="flex" marginTop={5}>
                                 <Box padding={1}>
                                   <ListItemIcon>
                                       <Phone/>
                                   </ListItemIcon>
                                 </Box>
                                 <Text align="center" bold color="darkGray">
                                    تلفن همراه
                                 </Text>
                              </Box>
                            </div>
                          </div><hr/>

                          <div>
                            <div class="col-lg-8">
                            <Box marginTop={5}>
                            <Text align="center" bold color="darkGray">
                               www.test.com
                            </Text>
                            </Box>
                            </div>
                            <div class="col-lg-4" dir="rtl">
                              <Box alignItems="center" display="flex" marginTop={5}>
                                 <Box padding={1}>
                                   <ListItemIcon>
                                       <Web/>
                                   </ListItemIcon>
                                 </Box>
                                 <Text align="center" bold color="darkGray">
                                    وب سایت
                                 </Text>
                              </Box>
                            </div>
                          </div><hr/>

                          <div>
                            <div class="col-lg-8">
                            <Box marginTop={5}>
                            <Text align="center" bold color="darkGray">
                               mail@gmail.com
                            </Text>
                            </Box>
                            </div>
                            <div class="col-lg-4" dir="rtl">
                              <Box alignItems="center" display="flex" marginTop={5}>
                                 <Box padding={1}>
                                   <ListItemIcon>
                                       <MailOutline/>
                                   </ListItemIcon>
                                 </Box>
                                 <Text align="center" bold color="darkGray">
                                    ایمیل
                                 </Text>
                              </Box>
                            </div>
                          </div><hr/>

                          <div>
                            <div class="col-lg-8">
                            <Box marginTop={5}>
                            <center>
                            <ListItemIcon>
                                <NearMe/>
                            </ListItemIcon>
                            </center>
                            </Box>
                            </div>
                            <div class="col-lg-4" dir="rtl">
                              <Box alignItems="center" display="flex" marginTop={5}>
                                 <Box padding={1}>
                                   <ListItemIcon>
                                       <Public/>
                                   </ListItemIcon>
                                 </Box>
                                 <Text align="center" bold color="darkGray">
                                    صفحات اجتماعی
                                 </Text>
                              </Box>
                            </div>
                          </div>
                      <br/><br/><br/>
                      <br/><br/><br/><br/><br/><br/>
                  </Paper>
                </Box>
              </div>
          </div>

          <div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <Box marginTop={5}>
                <Paper>
                  <Box color="watermelon" height={30}>
                    <center>
                      <div class="f001">توضیحات</div>
                    </center>
                  </Box>
                      <Box marginTop={4} marginRight={3}>
                        <div dir="rtl">
                            <h4>
شرکت آرته گرافیک - آرته دیجیتال در یک نگاه طراحی و چاپ دیجیتال (کاتالوگ، فولدر، بروشور، تراکت، کارت ویزیت، سربرگ، پاکت، کارت تبریک، کارت دعوت، لیبل، فاکتور رسمی، یادداشت، سیاه وسفید، لیبل سی دی، کارت تبریک مناسبت ها، کارت دعوت نمایشگاه، چاپ با اطلاعات متغیر، شاپینگ بگ، تقدیر نامه، کارت ورود و خروج و ....) - طراحی و چاپ افست - استندهای نمایشگاهی - اجاره تجهیزات و ملزومات نمایشگاهی - PVC کارت تقویم و سررسید 1397
                            </h4>
                        </div>
                     </Box>

                    <br/><br/>
                </Paper>
              </Box>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <Box marginTop={5}>
                  <Paper>
                    <Box color="watermelon" height={30}>
                      <center>
                        <div class="f001">گالری</div>
                      </center>
                    </Box>
                    <Swiper {...params}>
                      <div><center><img height="500" src="http://localhost/uni/pic/39018399_683850058642644_3288296617597206528_n.jpg"/></center></div>
                      <div><center><img height="500" src="http://localhost/uni/42078556_716939655333196_6656461103099670239_n.jpg"/></center></div>
                      <div>Slide 3</div>

                    </Swiper>

                  </Paper>
                </Box>
            </div>
          </div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 Hyper">
              <Box height={40} marginTop={5} color="watermelon">
                <center>
                  <div class="f001">Copyrigth(c) 2018</div>
                </center>
              </Box>
          </div>
      </div>
    </div>
    );
  }
}

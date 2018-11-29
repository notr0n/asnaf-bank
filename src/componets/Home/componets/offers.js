import React, { Component } from 'react';
import {Box , Image , Text , Button , Icon} from 'gestalt';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import StarRatingComponent from 'react-star-rating-component';
import Badge from '@material-ui/core/Badge';

import '../styles/bs/css/bootstrap-iso.css';
import '../styles/App.css';
import '../styles/gestalt.css';

export default class Offers extends Component {
  constructor() {
  super();

  this.state = {
    rating: 3
  };
}

onStarClick(nextValue, prevValue, name) {
  this.setState({rating: nextValue});
}

  render() {
     const { rating } = this.state;
    return (
      <div class="bootstrap-iso">
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 header0">
            <Card>
             <CardActionArea>
               <CardMedia
                 component="img"
                 alt="Contemplative Reptile"
                 height="240"
                 image="http://localhost/uni/p0/11.jpg"
                 title="Contemplative Reptile"
               />
               <CardContent>
                    <Box alignItems="center" display="flex">
                      <Box marginRight={1} paddingX={1}>
                      <Box alignItems="center" display="flex" marginLeft={-5}>
                         <Box marginRight={1} padding={1}>
                            <Icon icon="location" accessibilityLabel="location" color="darkGray" />
                         </Box>
                         <Text align="center" bold color="darkGray">
                         رستوران
                         </Text>
                     </Box>
                          <StarRatingComponent
                              name="rate1"
                              starCount={4}
                              value={3}
                              onStarClick={this.onStarClick.bind(this)}
                            />
                      </Box>
                      <Box marginLeft={5}>
                        <Text align="center" bold color="darkGray">

                        </Text>
                      </Box>
                      <hr/>
                      <Text bold color="darkGray">رستوران ایوان برج میلاد با منوی باز</Text>
                    </Box>
                    <br/>

                    <Box color="watermelon" alignItems="center" display="flex">
                        <Button color="transparent" text="نمایش اطلاعات تماس" />
                    </Box>
               </CardContent>
             </CardActionArea>
            </Card>

          </div>
      </div>
    );
  }
}

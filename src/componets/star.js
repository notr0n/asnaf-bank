import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

export default class Stars extends Component {
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
      <StarRatingComponent
          name="rate1"
          starCount={4}
          value={3}
          onStarClick={this.onStarClick.bind(this)}
        />
    );
  }
}

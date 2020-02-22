import React from 'react';

import Carousel from 'react-bootstrap/Carousel'
import BackgroundPic from './images/backgrounds/matthijs-smit-bRG2C0FAQEY-unsplash.jpg'
import Jumbotron from 'react-bootstrap/Jumbotron'

function MyCarousel() {
  return (
  <Jumbotron className="masthead">
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
</Jumbotron>
  );
}

export default MyCarousel;

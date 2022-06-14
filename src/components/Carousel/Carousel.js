// react

import React from 'react';

import Carousel from 'react-multi-carousel';
import useStyles from './Carousel.styles';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

const CustomCarousel = ({ children }) => {
  const classes = useStyles();
  return (
    <Carousel
      ssr
      partialVisbile
      deviceType={'desktop'}
      itemClass="image-item"
      responsive={responsive}
      autoPlay={true}
      className={classes.root}
    >
      {children}
    </Carousel>
  );
};

export default CustomCarousel;

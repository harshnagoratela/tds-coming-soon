import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
 
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const keywords = [
    'nature','beach','sea','birds','lightning','water','macbook','apple','ice','android',
    'desktop','cute','bridge','night','moon','sports','mountain','iphone','peacock','wallpaper',
    'sun','sea','nature','mountain','water','ipad','chair','nemo','sand','drone',
    'pen','texture','sunrise','river','nature','macbook','ice','night','moon','desert',
    'iceland','ocean','wallpaper','astronomy','texture','sunset','land','dawn','ocean','nature',
]

const UnsplashCarousel = () => {
    return (
        <Carousel
            swipeable={true}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            keyBoardControl={true}
            customTransition={"transform 2000ms ease-in-out"}
            transitionDuration={2000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {keywords.map(item => (
                <img
                    draggable={false}
                    alt={`Unsplash - ${item}`}
                    style={{ width: "100%", cursor: "pointer" }}
                    src={`https://source.unsplash.com/1600x900/?${item}`}
                />

                
            ))}            
        </Carousel>
    );
}

export default UnsplashCarousel;

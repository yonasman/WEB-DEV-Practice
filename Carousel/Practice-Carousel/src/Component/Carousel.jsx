import React from 'react'
import { Images } from './images/imgData'
import {Carousel} from "react-responsive-carousel"
import classes from "./Carousel.module.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
function CarouselEffect() {
  return (
    <div className={classes.container}>
      <Carousel autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      
      >
        {Images.map((image) => {
            return (
                <img src={image} key={image} alt={image} />
            );
          })
        }
        </Carousel>
        <div className={classes.hero_image}>
            
        </div>
      
    </div>
  )
}

export default CarouselEffect

import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image1 from "../assets/1.jpg"
import Image2 from "../assets/2.jpeg"
import Image3 from "../assets/3.jpg"


export default function Slider() {
    return (
        <Carousel autoPlay infiniteLoop interval={2000} showThumbs={false} showStatus={false}>
            <div>
                <img src={Image1} className='max-h-[80vh] rounded-2xl'/>
                
            </div>
            <div>
                <img src={Image2} className='max-h-[80vh] rounded-2xl flex item-center'/>
                
            </div>
            <div>
                <img src={Image3} className='max-h-[80vh] rounded-2xl'/>
                
            </div>
        </Carousel>
    )
}

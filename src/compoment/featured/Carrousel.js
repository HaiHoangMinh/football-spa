import React from 'react';
import Slider from "react-slick";
import slide_one from '../../resource/images/slide_one.jpg'
import slide_two from '../../resource/images/slide_two.jpg'
import slide_three from '../../resource/images/slide_three.jpg'
import slide_four from '../../resource/images/slide_four.jpg'


const Carrousel = () => {

    const settings ={
        dots: false,
        infinite:true,
        autoplay: true,
        speed: 500
    }
    return (
        <div
            className="carrousel_wrapper"
            style={{
                height:`${window.innerHeight}px`,
                //width:`${window.innerWidth}px`,
                overflow:'hidden'
            }}
        >
            
            <Slider {...settings}>
                <div>
                    <div 
                        className="carrousel_image"
                        style={{
                            background:`url(${slide_one})`,
                            height:`${window.innerHeight}px`
                        }}
                    ></div>
                </div>
                <div>
                <div 
                        className="carrousel_image"
                        style={{
                            background:`url(${slide_two})`,
                            height:`${window.innerHeight}px`
                        }}
                    ></div>
                </div>
                <div>
                <div 
                        className="carrousel_image"
                        style={{
                            background:`url(${slide_three})`,
                            height:`${window.innerHeight}px`
                        }}
                    ></div>
                </div>
                <div>
                    <div 
                        className="carrousel_image"
                        style={{
                            background:`url(${slide_four})`,
                            height:`${window.innerHeight}px`
                        }}
                    ></div>
                </div>        
            </Slider>
            
        </div>
    );
};

export default Carrousel;
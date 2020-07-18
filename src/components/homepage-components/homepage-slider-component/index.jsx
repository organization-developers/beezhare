import React from "react";
import styled from 'styled-components'
import Slider from "react-slick";

// Style Card
import cardTopWorkerStyle from './homepage-slider.module.scss'

export default function SliderHomePage() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };
    return (
        <>
            <Slider {...settings}>
                <div>
                    <CardTopWorker className={`${cardTopWorkerStyle.cardTopWorker}`}>
                        <h3>Code Name 01</h3>
                        
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cupiditate magnam ea molestias neque quam error sunt quidem unde quae sed aperiam culpa harum autem reiciendis, libero et aut vero?</p>
                    </CardTopWorker>
                </div>
                
                <div>
                    <CardTopWorker className={`${cardTopWorkerStyle.cardTopWorker}`}>
                        <h3>Code Name 02</h3>
                        
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cupiditate magnam ea molestias neque quam error sunt quidem unde quae sed aperiam culpa harum autem reiciendis, libero et aut vero?</p>
                    </CardTopWorker>
                </div>

                <div>
                    <CardTopWorker className={`${cardTopWorkerStyle.cardTopWorker}`}>
                        <h3>Code Name 03</h3>
                        
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cupiditate magnam ea molestias neque quam error sunt quidem unde quae sed aperiam culpa harum autem reiciendis, libero et aut vero?</p>
                    </CardTopWorker>
                </div>
                
                <div>
                    <CardTopWorker className={`${cardTopWorkerStyle.cardTopWorker}`}>
                        <h3>Code Name 04</h3>
                        
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cupiditate magnam ea molestias neque quam error sunt quidem unde quae sed aperiam culpa harum autem reiciendis, libero et aut vero?</p>
                    </CardTopWorker>
                </div>

                <div>
                    <CardTopWorker className={`${cardTopWorkerStyle.cardTopWorker}`}>
                        <h3>Code Name 05</h3>
                        
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cupiditate magnam ea molestias neque quam error sunt quidem unde quae sed aperiam culpa harum autem reiciendis, libero et aut vero?</p>
                    </CardTopWorker>
                </div>
                
                <div>
                    <CardTopWorker className={`${cardTopWorkerStyle.cardTopWorker}`}>
                        <h3>Code Name 06</h3>
                        
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cupiditate magnam ea molestias neque quam error sunt quidem unde quae sed aperiam culpa harum autem reiciendis, libero et aut vero?</p>
                    </CardTopWorker>
                </div>
            
            </Slider>
        </>
    );
}

const CardTopWorker = styled.div`
    padding: 10px;
    text-align: center
`
import React from "react";

import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1500,
    swipeToSlide: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,

    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
            
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
}

const Testimonials = () => {
    return <Slider {...settings}>
        <div className="testimonial py-4 px-3">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id a nulla explicabo vero unde minima, fugiat excepturi magnam voluptatum ducimus maxime recusandae ad vitae aliquid nihil dolores necessitatibus, facere laboriosam.</p>
        
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} className="w-25 h-25 rounded-2" alt="" />

                <div>
                    <h6 className="mb-0 mt-3">Nguyen Van A</h6>

                    <p>Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id a nulla explicabo vero unde minima, fugiat excepturi magnam voluptatum ducimus maxime recusandae ad vitae aliquid nihil dolores necessitatibus, facere laboriosam.</p>
        
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className="w-25 h-25 rounded-2" alt="" />

                <div>
                    <h6 className="mb-0 mt-3">Nguyen Van B</h6>

                    <p>Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id a nulla explicabo vero unde minima, fugiat excepturi magnam voluptatum ducimus maxime recusandae ad vitae aliquid nihil dolores necessitatibus, facere laboriosam.</p>
        
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className="w-25 h-25 rounded-2" alt="" />

                <div>
                    <h6 className="mb-0 mt-3">Nguyen Van C</h6>

                    <p>Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id a nulla explicabo vero unde minima, fugiat excepturi magnam voluptatum ducimus maxime recusandae ad vitae aliquid nihil dolores necessitatibus, facere laboriosam.</p>
        
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className="w-25 h-25 rounded-2" alt="" />

                <div>
                    <h6 className="mb-0 mt-3">Nguyen Van D</h6>

                    <p>Customer</p>
                </div>
            </div>
        </div>
    </Slider>
}

export default Testimonials;
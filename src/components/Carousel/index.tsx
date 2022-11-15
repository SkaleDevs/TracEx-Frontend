import React, { Component } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import swarajImg from '../../../public/solar-bus.jpeg';
export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 8000,
      speed: 500,
      lazyLoad: true,
      slidesToShow: 1,
      arrows: true,
      slidesToScroll: 1
    };
    return (
      <>
        <Slider {...settings}>
          <div>
            <Image
              src={swarajImg}
              alt="solar panels"
              width="1880rem"
              height="750rem"
              style={{ borderRadius: '30px' }}
            />
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
              alt="solar panels"
              width="1880rem"
              height="750rem"
              style={{ borderRadius: '30px' }}
            />
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="solar panels"
              width="1880rem"
              height="750rem"
              style={{ borderRadius: '30px' }}
            />
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1472313420546-a46e561861d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              alt="solar panels"
              width="1880rem"
              height="750rem"
              style={{ borderRadius: '30px' }}
            />
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="solar panels"
              width="1880rem"
              height="750rem"
              style={{ borderRadius: '30px' }}
            />
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1473876637954-4b493d59fd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80"
              alt="solar panels"
              width="1880rem"
              height="750rem"
              style={{ borderRadius: '30px' }}
            />
          </div>
        </Slider>
      </>
    );
  }
}

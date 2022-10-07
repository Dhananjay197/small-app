import React from 'react'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import testimonial from '../../../assets/images/testimonial-thumb.jpg'
import './CrouselSwiper.scss';
import CrouselSliderData from './CrouselSliderData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';



const CrouselSwiper = () => {
  return (
    <section className="slider">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Swiper

              modules={[Navigation, Pagination, Autoplay, A11y]}
              spaceBetween={50}
              slidesPerView={2}
              navigation
              autoplay
              pagination={{ clickable: true }}

            >


              {CrouselSliderData.map((val: any) => {
                return (
                  <SwiperSlide>
                    <div className='crousel shadow text-center p-5 '>
                      <p className='para '>
                        {val.text}
                      </p>
                      <img src={val.img} alt="" className='img-fluid text-center my-3' />
                      <h6 className='head' >{val.head}</h6>
                    </div>
                  </SwiperSlide>
                )
              })}



            </Swiper>
          </div>
        </div>
      </div>
    </section>

  )
}

export default CrouselSwiper
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import html from '../../../asset/images/html_logo.png'
import css from '../../../asset/images/css_logo.png'
import bootstrap from '../../../asset/images/bootstrap_logo.png'
import tailwind from '../../../asset/images/tailwind_logo.png'
import javascript from '../../../asset/images/js_logov1.jpg'
import react from '../../../asset/images/react_logo.png'
import laravel from '../../../asset/images/laravel_logo.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
export const Section1 = () => {
    return (
        <div>
<section className="py-20">
    <div className="w-full flex justify-center">
        <p className="text-white font-semibold text-4xl border-b-4 border-primary-color py-1 mb-4">
          My Skills
        </p>
      </div>

      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper cursor-grab active:cursor-grabbing w-3/4 mt-10 mx-auto"
      >
        <SwiperSlide className="flex items-center justify-center">
          <img src={html} alt="HTML Logo" className="w-[10vw]" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src={css} alt="CSS Logo" className="w-[10vw]" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src={bootstrap} alt="Bootstrap Logo" className="w-[15vw]" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src={tailwind} alt="Tailwind Logo" className="w-[10vw]" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src={javascript} alt="JavaScript Logo" className="w-[10vw]" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src={react} alt="React Logo" className="w-[10vw]" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src={laravel} alt="Laravel Logo" className="w-[10vw]" />
        </SwiperSlide>
      </Swiper>
    </section>
        </div>
    );
};

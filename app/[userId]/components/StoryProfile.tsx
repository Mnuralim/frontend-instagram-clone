'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css';

const StoryProfile = () => {
  const [slidesPerView, setSlidesPerView] = useState<number>(5);

  const getSlidesPerView = () => {
    return window.innerWidth <= 1024 ? 4 : 8;
  };

  useEffect(() => {
    setSlidesPerView(getSlidesPerView());

    const handleResize = () => {
      setSlidesPerView(getSlidesPerView());
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="px-3 my-2 md:my-11">
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className="mySwiper"
        slidesPerView={slidesPerView}
        spaceBetween={7}
      >
        <SwiperSlide>
          <div className="w-14 h-14 flex justify-center items-center rounded-full bg-[#262626] md:w-[87px] md:h-[87px]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-14 h-14 flex justify-center items-center rounded-full bg-[#262626] md:w-[87px] md:h-[87px]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-14 h-14 flex justify-center items-center rounded-full bg-[#262626] md:w-[87px] md:h-[87px]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-14 h-14 flex justify-center items-center rounded-full bg-[#262626] md:w-[87px] md:h-[87px]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-14 h-14 flex justify-center items-center rounded-full bg-[#262626] md:w-[87px] md:h-[87px]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-14 h-14 flex justify-center items-center rounded-full bg-[#262626] md:w-[87px] md:h-[87px]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-14 h-14 flex justify-center items-center rounded-full bg-[#262626] md:w-[87px] md:h-[87px]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-14 h-14 flex justify-center items-center rounded-full bg-[#262626] md:w-[87px] md:h-[87px]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-14 h-14 flex justify-center items-center rounded-full bg-[#262626] md:w-[87px] md:h-[87px]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-14 h-14 flex justify-center items-center rounded-full bg-[#262626] md:w-[87px] md:h-[87px]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-14 h-14 flex justify-center items-center rounded-full bg-[#262626] md:w-[87px] md:h-[87px]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-14 h-14 flex justify-center items-center rounded-full bg-[#262626] md:w-[87px] md:h-[87px]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-14 h-14 flex justify-center items-center rounded-full bg-[#262626] md:w-[87px] md:h-[87px]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-14 h-14 flex justify-center items-center rounded-full bg-[#262626] md:w-[87px] md:h-[87px]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-14 h-14 flex justify-center items-center rounded-full bg-[#262626] md:w-[87px] md:h-[87px]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-14 h-14 flex justify-center items-center rounded-full bg-[#262626] md:w-[87px] md:h-[87px]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-14 h-14 flex justify-center items-center rounded-full bg-[#262626] md:w-[87px] md:h-[87px]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-14 h-14 flex justify-center items-center rounded-full bg-[#262626] md:w-[87px] md:h-[87px]"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default StoryProfile;

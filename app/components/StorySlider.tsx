"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css";
import StoryCard from "./StoryCard";

const StorySlider = () => {
  const [slidesPerView, setSlidesPerView] = useState<number>(5);

  const getSlidesPerView = () => {
    return window.innerWidth <= 1024 ? 4 : 8;
  };

  useEffect(() => {
    setSlidesPerView(getSlidesPerView());

    const handleResize = () => {
      setSlidesPerView(getSlidesPerView());
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="px-3 w-full mt-14">
      <Swiper freeMode={true} grabCursor={true} modules={[FreeMode]} className="mySwiper" slidesPerView={slidesPerView} spaceBetween={7}>
        <SwiperSlide>
          <StoryCard />
        </SwiperSlide>
        <SwiperSlide>
          <StoryCard />
        </SwiperSlide>
        <SwiperSlide>
          <StoryCard />
        </SwiperSlide>
        <SwiperSlide>
          <StoryCard />
        </SwiperSlide>
        <SwiperSlide>
          <StoryCard />
        </SwiperSlide>
        <SwiperSlide>
          <StoryCard />
        </SwiperSlide>
        <SwiperSlide>
          <StoryCard />
        </SwiperSlide>
        <SwiperSlide>
          <StoryCard />
        </SwiperSlide>
        <SwiperSlide>
          <StoryCard />
        </SwiperSlide>
        <SwiperSlide>
          <StoryCard />
        </SwiperSlide>
        <SwiperSlide>
          <StoryCard />
        </SwiperSlide>
        <SwiperSlide>
          <StoryCard />
        </SwiperSlide>
        <SwiperSlide>
          <StoryCard />
        </SwiperSlide>
        <SwiperSlide>
          <StoryCard />
        </SwiperSlide>
        <SwiperSlide>
          <StoryCard />
        </SwiperSlide>
        <SwiperSlide>
          <StoryCard />
        </SwiperSlide>
        <SwiperSlide>
          <StoryCard />
        </SwiperSlide>
        <SwiperSlide>
          <StoryCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default StorySlider;

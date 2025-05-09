"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import "../supportSwiper.css";
import { useState } from "react";
import SwiperSlideContents from "./supportSwipercomponents/SwiperSlideContents";
import { slideArr } from "./supportSwipercomponents/supporSwipertData";
import SwiperPagenation from "./supportSwipercomponents/SwiperPagenation";

const SupportSwiper = () => {
  const [swiperIndex, setSwiperIndex] = useState<number>(0);
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const prev = () => swiper?.slidePrev();
  const next = () => swiper?.slideNext();

  return (
    <Swiper
      className="w-[1600px] h-[600px] relative top-[-27%] left-72 max-md:w-full max-md:h-[505px]
      max-md:top-[-2%] max-md:left-0"
      loop={true}
      modules={[Navigation, Pagination]}
      spaceBetween={300}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1.6,
        },
      }}
      // index 변경시 감지하는 이벤트
      onActiveIndexChange={(e) => setSwiperIndex(e.realIndex)}
      // 스와이퍼 활성화시 작동
      onSwiper={(e) => setSwiper(e)}
    >
      {slideArr.map((v, i) => {
        return (
          <SwiperSlide
            key={i}
            className="text-center text-lg bg-white flex justify-center items-end"
          >
            <SwiperSlideContents {...v} />
          </SwiperSlide>
        );
      })}
      <SwiperPagenation
        prev={prev}
        next={next}
        swiperIndex={swiperIndex}
        swiper={swiper}
      />
    </Swiper>
  );
};

export default SupportSwiper;

import React from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./Carousel.css";
// import "swiper/css";

const Carousel = () => {
  SwiperCore.use([Autoplay]);

  return (
    <div className="carousel mt-24">
      <Swiper
        spaceBetween={50}
        loop={true}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },

          1024: {
            slidesPerView: 5,
          },
        }}
        slidesPerView={2}
        speed={2000}
        autoplay={{ delay: 500, disableOnInteraction: false }}
        freeMode={true}
      >
        <SwiperSlide>
          <img src="/images/0003.jpg" width="350" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/0004.jpg" width="350" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/0005.jpg" width="350" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/0006.jpg" width="350" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/0007.jpg" width="350" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/0008.jpg" width="350" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/0009.jpg" width="350" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/0010.jpg" width="350" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;

import React from "react";
import "../../styles/testimonials.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";
import avatar01 from "../../img/avatar01.png";
import avatar02 from "../../img/avatar02.png";

export default function Testimonials() {
  return (
    <>
      <section>
        <div className="container sliders">
          <h2 className="section__title">اراء الزبائن</h2>

          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-01">
                  <img src={avatar01} alt="" />
                </div>
                <h4>سارة محمد</h4>
                <p>
                  اراء الزبائن الحلوة كلش تهمنا وهي سر نجاحنا وتوفيقنا شكرا لكل
                  زبائنا الراقيين اللي ينطون حقنا واكثر بكلامهم الحلو اللي
                  يرفعنا ويجبرنا انطور نفسنا للاحسن
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-02">
                  <img src={avatar02} alt="" />
                </div>
                <h4>زهراء حيدر </h4>
                <p>
                  اراء الزبائن الحلوة كلش تهمنا وهي سر نجاحنا وتوفيقنا شكرا لكل
                  زبائنا الراقيين اللي ينطون حقنا واكثر بكلامهم الحلو اللي
                  يرفعنا ويجبرنا انطور نفسنا للاحسن
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-03">
                  <img src={avatar01} alt="" />
                </div>
                <h4>نور حقي</h4>
                <p>
                  اراء الزبائن الحلوة كلش تهمنا وهي سر نجاحنا وتوفيقنا شكرا لكل
                  زبائنا الراقيين اللي ينطون حقنا واكثر بكلامهم الحلو اللي
                  يرفعنا ويجبرنا انطور نفسنا للاحسن
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}

import React from "react";
import heroImg from "../../img/gym-02.png";
import dumbleIcon from "../../img/dumble.png";
import "../../styles/hero.css";

const Hero = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="hero__wrapper">
          {/*=======   hero content   ========*/}
          <div className="hero__content">
            <h2
              className="section__title"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              عالم الابطال خطوتك نحو
              <span className="highlights"> بناء</span> الجسم الصحي
            </h2>
            <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="1800">
              الذهاب للجيم يوميًا أصبح من العادات الصحية التي يقوم بها الكثير من
              البنات <br /> والشباب سواء كان بغرض فقدان بعض الوزن الزائد أو بغرض
              نحت الجسم <br /> والحصول على قوام مثالي أو بغرض بناء العضلات وكمال
              الأجسام.
              <br />
              ولكن معظم البنات والشباب لا يدركون الفوائد الحقيقة الناتجة عن
              الذهاب للجيم يوميًا
            </p>

            <div
              className="hero__btns"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="2000"
            >
              <button className="register__btn">أشترك الان</button>
              <button className="watch__btn">
                شاهد الفيديو
                <span>
                  <i class="ri-play-fill"></i>
                </span>
              </button>
            </div>
          </div>

          {/*=======   hero img   ========*/}
          <div className="hero__img">
            <div className="hero__img-wrapper">
              <div className="box-01">
                <div className="box-02">
                  <div className="box-03">
                    <div className="box__img">
                      <img src={heroImg} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="heart__rate"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <h5>معدل ضربات القلب</h5>
                <span>
                  <i class="ri-heart-pulse-fill"></i>
                </span>
                <h6>2567 BPM</h6>
              </div>

              <div
                className="gym__location"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <span>
                  <i class="ri-map-pin-2-fill"></i>
                </span>
                <h5>
                  ابحث عن <br /> اقرب مركز
                </h5>
              </div>

              <div
                className="dumnle__icon"
                data-aos="fade-down"
                data-aos-duration="1500"
              >
                <img src={dumbleIcon} alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

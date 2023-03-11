import React from "react";
import "../../styles/pricing.css";
const Pricing = () => {
  return (
    <section id="pricing-plan">
      <div className="container">
        <div className="pricing__top">
          <h2 className="section__title">
            اسعار <span className="highlights">الاشتراكات </span>الحالية
          </h2>
          <p>
            قم باختيار أحد اشتراكات على حسب احتياجاتك! اطلب اشتراكك الآن! مكرس
            لإرضائك، وإتمام جميع أعمالك بالسعر الذي يرضيك
          </p>
        </div>

        {/* ===== pricing wrapper ==== */}
        <div className="pricing__wrapper">
          <div
            className="pricing__item"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="pricing__card-top">
              <h2 className="section__title">الاشتراك العادي </h2>
              <h2 className="pricing section__title">
                $20 <span>/شهريا</span>
              </h2>
            </div>

            <div className="services">
              <ul>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  دخول غير محدود
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  دعم العملاء
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  مدرب شخصي
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  الخيارات القياسية
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  5 حصص في الأسبوع
                </li>
              </ul>
              <button className="register__btn">اشترك الان</button>
            </div>
          </div>

          <div
            className="pricing__item pricing__item-02"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            <div className="pricing__card-top">
              <h2 className="section__title">الاشتراك المميز </h2>
              <h2 className="pricing section__title">
                $50 <span>/شهريا</span>
              </h2>
            </div>

            <div className="services">
              <ul>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  دخول غير محدود
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  دعم العملاء
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  مدرب شخصي
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  الخيارات القياسية
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  5 حصص في الأسبوع
                </li>
              </ul>
              <button className="register__btn">اشترك الان</button>
            </div>
          </div>

          <div
            className="pricing__item "
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="pricing__card-top">
              <h2 className="section__title">الاشتراك القياسي </h2>
              <h2 className="pricing section__title">
                $100 <span>/شهريا</span>
              </h2>
            </div>

            <div className="services">
              <ul>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  دخول غير محدود
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  دعم العملاء
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  مدرب شخصي
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  الخيارات القياسية
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  5 حصص في الأسبوع
                </li>
              </ul>
              <button className="register__btn">اشترك الان</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

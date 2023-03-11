import React from "react";
import "../../styles/exercises.css";
import lunges from "../../img/lunges.png";
import yoga from "../../img/yoga-pose.png";
import extended from "../../img/extended.png";

const Exercises = () => {
  return (
    <section id="schedule">
      <div className="container exercises__container">
        <div className="exercises__top">
          <h2 className="section__title">
            فوائد <span className="highlights">التمرينات</span>
          </h2>
          <p>
            تتحكم التمارين الرياضية في الوزن ممارسة الرياضة تكافح الحالات
            المرضية الصحية والأمراض تُحسن ممارسة الرياضة الحالة المزاجية
            التمارين تزيد الطاقة تعزز ممارسة الرياضة النوم بشكل أفضل تضيف
            التمارين الرياضية الشرارة إلى حياتك الجنسية يمكن لممارسة الرياضة أن
            تكون مسلية
          </p>
        </div>

        {/*======= exercises list ========*/}
        <div className="exercise__wrapper">
          <div
            className="exercise__item"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <span className="exercise__icon">
              <img src={lunges} />
            </span>

            <div className="exercises__content">
              <h4>حياة صحية</h4>
              <p>أي فعلٍ يقوم به الشخص يعود عليه بالفائدة الجسديّة والعاطفيّة</p>
            </div>
          </div>

          <div
            className="exercise__item"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <span className="exercise__icon">
              <img src={yoga} />
            </span>

            <div className="exercises__content">
              <h4>زيادة المرونة</h4>
              <p>أكد من أدائك لحركات التمارين بشكل صحيح. ركِزْ متابعتك على الوصفات </p>
            </div>
          </div>

          <div
            className="exercise__item"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <span className="exercise__icon">
              <img src={extended} />
            </span>

            <div className="exercises__content">
              <h4>خفض ضغط الدم</h4>
              <p> ممارسة الرياضة بانتظام إذ يمكنها خفض ضغط الدم وتخفيف التوتر</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exercises;

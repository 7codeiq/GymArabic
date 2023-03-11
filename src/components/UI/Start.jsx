import React from "react";
import "../../styles/start.css";
import trainerImg from "../../img/trainer.png";

const Start = () => {
  return (
    <section id="classes">
      <div className="container">
        <div className="start__wrapper">
          <div className="start__img">
            <img
              src={trainerImg}
              alt=""
              data-aos="fade-left"
              data-aos-duration="1500"
            />
          </div>

          <div
            className="start__content"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h2 className="section__title">
              هل انت مستعد للدخول الى{" "}
              <span className="highlights">عالم الرياضة ؟</span>
            </h2>
            <p>
              ربما تكون لديك فكرة عن مستوى لياقتك البدنية. إلا أن معرفة التفاصيل
              الدقيقة قد تساعدك في وضع أهداف واقعية لتحقيق اللياقة البدنية،
              ومتابعة مدى تقدمك وحفاظك على الحافز. بمجرد أن تعرف نقطة الانطلاق،
              يمكنك التخطيط للهدف الذي ترغب في الوصول إليه
            </p>

            <button className="register__btn">انطلق الان</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;

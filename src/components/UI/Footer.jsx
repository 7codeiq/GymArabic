import React from "react";
import "../../styles/footer.css";
import logo from "../../img/dumble.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" data-aos="fade-up" data-aos-duration="1500">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__box">
            <div className="logo">
              <div className="logo__img">
                <img src={logo} alt="" />
              </div>
              <h2>عالم الابطال</h2>
            </div>
            <p>
              الذهاب للجيم يوميًا أصبح من العادات الصحية التي يقوم بها الكثير من
              البنات والشباب سواء كان بغرض فقدان بعض الوزن الزائد أو بغرض نحت
              الجسم
            </p>
          </div>

          <div className="footer__box">
            <h4 className="footer__title">شركتنا</h4>

            <ul className="footer__links">
              <li>
                <a href="#">برنامجنا</a>
              </li>
              <li>
                <a href="#">خطتنا</a>
              </li>
              <li>
                <a href="#">اشترك معنا</a>
              </li>
            </ul>
          </div>

          <div className="footer__box">
            <h4 className="footer__title">روابط سريعة</h4>

            <ul className="footer__links">
              <li>
                <a href="#">من نحن</a>
              </li>
              <li>
                <a href="#">اتصل بنا</a>
              </li>
              <li>
                <a href="#">الدعم</a>
              </li>
            </ul>
          </div>
        </div>

        <p className="copyright">
          Copyright - {year} developed by Mortadha All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

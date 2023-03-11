import React, {useRef} from "react";
import "../../styles/header.css";
import logo from "../../img/dumble.png";
import {useEffect} from "react";

const nav__links = [
  {
    path: "#home",
    display: "الرئيسية"
  },
  {
    path: "#schedule",
    display: "التمارين"
  },
  {
    path: "#classes",
    display: "الحياة الصحية"
  },
  {
    path: "#pricing-plan",
    display: "الاسعار"
  }
];

const Header = () => {


  const headerRef = useRef(null);

  const headerfunc = () => {
    if (document.body.scrollTop >80 || document.documentElement.scrollTop >80){
      headerRef.current.classList.add('sticky__header')
    }else{
      headerRef.current.classList.remove('sticky__header')
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', headerfunc);

    return ()=> window.removeEventListener('scroll', headerfunc);
  }, []);

  const handleClick= e =>{
    e.preventDefault()

    const targetAttr = e.target.getAttribute('href')
    const location = document.querySelector(targetAttr).offsetTop

    window.scrollTo({
      left:0,
      top: location - 80,
    })
  }

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">
          {/*=======   LOGO   ========*/}
          <div className="logo">
            <div className="logo__img">
              <img src={logo} alt="" />
            </div>
            <h2>عالم الابطال</h2>
          </div>

          {/*=======   navigation menu   ========*/}

          <div className="navigation">
            <ul className="menu">
              {nav__links.map(item => (
                <li className="nav__item">
                  <a onClick={handleClick} href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          {/*=======   nav right   ========*/}
          <div className="nav__right">
            <button className="register__btn">التسجيل</button>
            <span className="mobile__menu">
                <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

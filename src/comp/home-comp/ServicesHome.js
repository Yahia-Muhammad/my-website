import { useState } from "react";
import "./ServicesHome.css";

const ServicesHome = () => {
  const [leftSlide, setLeftSlide] = useState(0);
  const [scal, setScal] = useState("endScal");

  const moveRight = () => {
    if (leftSlide != -300) {
      setScal("startScal");
      setTimeout(() => {
        setLeftSlide((e) => e - 100);
      }, 500);
      setTimeout(() => {
        setScal("endScal");
      }, 1500);
    }
  };

  const moveLeft = () => {
    if (leftSlide != 0) {
      setScal("startScal");
      setTimeout(() => {
        setLeftSlide((e) => e + 100);
      }, 500);
      setTimeout(() => {
        setScal("endScal");
      }, 1500);
    }
  };

  return (
    <div className="my-services">
      <h4>
        My <span>Services</span>
      </h4>
      <div className="services-desktop">
        <section>
          <h5 style={{ marginBottom: "15px" }}>Web Design</h5>
          <p style={{ textAlign: "left" }}>
            I can assist with designing the layout and arrangement of different
            elements on web pages, as well as adjusting the colors, fonts,
            images, icons, and other aesthetic and functional factors.
          </p>
        </section>
        <section>
          <h5 style={{ marginBottom: "15px" }}>Web Developer</h5>
          <p style={{ textAlign: "left" }}>
            Front-End web developers use programming languages to convert web
            design layouts into user interfaces for websites, while improving
            user experience and website performance.
          </p>
        </section>
        <section>
          <h5 style={{ marginBottom: "15px" }}>Support</h5>
          <p style={{ textAlign: "left" }}>
            I can provide support in the field of Front-End, covering various
            aspects of web design and development. This includes assisting with
            technical issues and providing guidance and advice.
          </p>
        </section>
        <section>
          <h5 style={{ marginBottom: "15px" }}>Clean Code</h5>
          <p style={{ textAlign: "left" }}>
            By using standardized programming methods, organizing the code
            systematically, and documenting it effectively, we can write code in
            a clean, understandable, and maintainable way.
          </p>
        </section>
      </div>
      <div id="slider" className="services-mobile">
        <div
          style={{ left: `${leftSlide}%` }}
          id="sliderInner"
          className="slider-inner"
        >
          <section className={scal}>
            <h5 style={{ marginBottom: "15px" }}>Web Design</h5>
            <p style={{ textAlign: "left" }}>
              I can assist with designing the layout and arrangement of
              different elements on web pages, as well as adjusting the colors,
              fonts, images, icons, and other aesthetic and functional factors.
            </p>
          </section>
          <section className={scal}>
            <h5 style={{ marginBottom: "15px" }}>Web Developer</h5>
            <p style={{ textAlign: "left" }}>
              Front-End web developers use programming languages to convert web
              design layouts into user interfaces for websites, while improving
              user experience and website performance.
            </p>
          </section>
          <section className={scal}>
            <h5 style={{ marginBottom: "15px" }}>Support</h5>
            <p style={{ textAlign: "left" }}>
              I can provide support in the field of Front-End, covering various
              aspects of web design and development. This includes assisting
              with technical issues and providing guidance and advice.
            </p>
          </section>
          <section className={scal}>
            <h5 style={{ marginBottom: "15px" }}>Clean Code</h5>
            <p style={{ textAlign: "left" }}>
              By using standardized programming methods, organizing the code
              systematically, and documenting it effectively, we can write code
              in a clean, understandable, and maintainable way.
            </p>
          </section>
        </div>
        <div className="icon-arrow">
          <span
            className="icon-arrow-left click"
            onClick={() => {
              moveLeft();
            }}
          ></span>
          <span
            className="icon-arrow-right click"
            onClick={() => {
              moveRight();
            }}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default ServicesHome;

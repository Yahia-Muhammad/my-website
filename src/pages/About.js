import Header from "../comp/Header";
import Footer from "../comp/Footer";
import "./About.css";
import { useContext, useEffect } from "react";
import themeContext from "../config/Theme";
import { Helmet } from "react-helmet-async";


const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const { theme } = useContext(themeContext);

  return (
    <div className={theme}>
      <Helmet>
        <title>About</title>
        <meta name="description" content="ya7ia website front end developer, yahia muhammad i can help you create your website"/>
      </Helmet>
      <Header />
      <main className="about-page">
        <div>
          <h2>About</h2>
        </div>
      </main>
      <div className="about">
        <p>
          I am a front-end web designer, specialized in designing attractive and
          user-friendly interfaces using HTML, CSS, and JavaScript. I have
          extensive experience in designing distinctive and innovative user
          interfaces using ReactJS and jQuery, as well as designing images using
          Photoshop. I also use Git for version control and collaboration with
          other developers, and Firebase for web application development.
        </p>
        <p>
          I always strive to improve the user experience by designing user
          interfaces that are fast, perform well, and compatible with different
          devices. I am always enthusiastic about learning and developing my
          skills in the field of user interface design, and I am committed to
          achieving the best results
        </p>
        <div className="about-skill">
          <p className="skill">Skills: </p>
          <ul>
            <li>
              <span className="icon-html5"></span>
              <p
                style={{ background: "#E34F2621", border: "5px solid #E34F26" }}
              >
                HTML
              </p>
            </li>
            <li>
              <span className="icon-css3"></span>
              <p
                style={{ background: "#1572B621", border: "5px solid #1572B6" }}
              >
                CSS
              </p>
            </li>
            <li>
              <span className="icon-javascript"></span>
              <p
                style={{ background: "#F7DF1E21", border: "5px solid #F7DF1E" }}
              >
                JAVASCRIPT
              </p>
            </li>
            <li>
              <span className="icon-react"></span>
              <p
                style={{ background: "#61DAFB21", border: "5px solid #61DAFB" }}
              >
                REACT
              </p>
            </li>
            <li>
              <span className="icon-jquery"></span>
              <p
                style={{ background: "#0769AD21", border: "5px solid #0769AD" }}
              >
                JQUERY
              </p>
            </li>
            <li>
              <span className="icon-firebase"></span>
              <p
                style={{ background: "#FFCA2821", border: "5px solid #FFCA28" }}
              >
                FIREBASE
              </p>
            </li>
            <li>
              <span className="icon-git"></span>
              <p
                style={{ background: "#F0503221", border: "5px solid #F05032" }}
              >
                GIT
              </p>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;

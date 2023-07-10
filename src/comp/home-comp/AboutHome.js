import { Link, NavLink } from "react-router-dom";
import myPhotoTwo from "../../images/about-photo.webp";
import "./AboutHome.css";

const AboutHome = () => {
  return (
    <div className="about-me">
      <h4>
        About <span>Me</span>
      </h4>
      <div className="inside-about-me">
        <div>
          <div className="container-img-home">
            <img src={myPhotoTwo} alt="ph" />
          </div>
        </div>
        <div>
          <div>
            <p>
              I am a specialized user interface designer, focused on designing
              and developing front-end user interfaces for websites. I have
              experience in key web languages such as HTML, CSS, and JavaScript,
              and use popular frameworks such as React js to facilitate the
              development process.
            </p>
            <div className="skills">
              <p className="skill">Skills: </p>
              <span className="icon-html5"></span>
              <span className="icon-css3"></span>
              <span className="icon-javascript"></span>
              <span className="icon-react"></span>
              <span className="icon-jquery"></span>
              <span className="icon-firebase"></span>
              <span className="icon-git"></span>
            </div>
          </div>
          <div className="info">
            <ul>
              <li>
                <span>Name: </span>
                Yahia Muhammad
              </li>
              <li>
                <span>Phone: </span>
                01015678247
              </li>
              <li>
                <span>Email: </span>
                k7odary@gmail.com
              </li>
              <li>
                <span>Address: </span>
                Cairo, Egypt
              </li>
              <li>
                <span>Social Medis: </span>
                <div className="social">
                  <Link to={"https://web.whatsapp.com/send/?phone=201015678247"} target="_blank">
                    <span className="icon-whatsapp"></span>
                  </Link>
                  <Link to={"https://www.facebook.com/ya7ia.m/"} target="_blank">
                    <span className="icon-facebook-square"></span>
                  </Link>
                  <Link to={"https://www.instagram.com/ya7ia_mu7ammad/"} target="_blank">
                    <span className="icon-instagram"></span>
                  </Link>
                  <Link to={"#"} target="_blank">
                    <span className="icon-twitter-square"></span>
                  </Link>
                  <Link
                    to={"https://www.linkedin.com/in/yahia-muhammad-357393281/"}
                    target="_blank"
                  >
                    <span className="icon-linkedin-square"></span>
                  </Link>
                </div>
              </li>
            </ul>
            <NavLink to={"/about"}>
              <button className="mt spichial">About</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;

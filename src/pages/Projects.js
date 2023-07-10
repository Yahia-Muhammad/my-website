import Footer from "../comp/Footer";
import Header from "../comp/Header";
import { useContext, useEffect } from "react";
import themeContext from "../config/Theme";
import { Helmet } from "react-helmet-async";

import "./Projects.css";

import Project1 from "../images/img-porjects-webp/project (1).webp";
import Project2 from "../images/img-porjects-webp/project (2).webp";
import Project3 from "../images/img-porjects-webp/project (3).webp";
import Project4 from "../images/img-porjects-webp/project (4).webp";
import Project5 from "../images/img-porjects-webp/project (5).webp";
import Project6 from "../images/img-porjects-webp/project (6).webp";
import Project7 from "../images/img-porjects-webp/project (7).webp";
import Project8 from "../images/img-porjects-webp/project (8).webp";
import Project9 from "../images/img-porjects-webp/project (9).webp";
import Project10 from "../images/img-porjects-webp/project (10).webp";
import Project11 from "../images/img-porjects-webp/project (11).webp";
import Project12 from "../images/img-porjects-webp/project (12).webp";
import Project13 from "../images/img-porjects-webp/project (13).webp";
import Project14 from "../images/img-porjects-webp/project (14).webp";
import Project15 from "../images/img-porjects-webp/project (15).webp";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const { theme } = useContext(themeContext);

  return (
    <div className={theme}>
      <Helmet>
        <title>Projects</title>
        <meta name="description" content=""/>
      </Helmet>
      <Header />
      <main className="projects-page">
        <div>
          <h2>Projects</h2>
        </div>
      </main>
      <div className="container-img">
        <div className="box">
          <div className="dream">
            <img src={Project1} alt="img" />
            <img src={Project2} alt="img" />
            <img src={Project3} alt="img" />
            <img src={Project4} alt="img" />
            <img src={Project13} alt="img" />
          </div>
          <div className="dream">
            <img src={Project6} alt="img" />
            <img src={Project7} alt="img" />
            <img src={Project8} alt="img" />
            <img src={Project12} alt="img" />
            <img src={Project10} alt="img" />
          </div>
          <div className="dream">
            <img src={Project11} alt="img" />
            <img src={Project5} alt="img" />
            <img src={Project9} alt="img" />
            <img src={Project14} alt="img" />
            <img src={Project15} alt="img" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;

import Header from "../comp/Header";
import Footer from "../comp/Footer";
import { useContext, useEffect } from "react";
import themeContext from "../config/Theme";
import { Helmet } from "react-helmet-async";

import MainHome from '../comp/home-comp/MainHome';
import AboutHome from '../comp/home-comp/AboutHome';
import ProjectsHome from '../comp/home-comp/ProjectsHome';
import ContactHome from '../comp/home-comp/ContactHome';
import ServicesHome from '../comp/home-comp/ServicesHome';


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const { theme } = useContext(themeContext);

  return (
    <div className={theme}>
      <Helmet>
        <title>Yahia</title>
        <meta name="description" content="ya7ia website front end developer, yahia muhammad i can help you create your website"/>
      </Helmet>
      <Header />
        <MainHome />
        <AboutHome />
        <ServicesHome />
        <ProjectsHome />
        <ContactHome />
      <Footer />
    </div>
  );
};

export default Home;

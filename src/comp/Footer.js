import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useContext } from "react";
import themeContext from "../config/Theme";

const Footer = () => {
  const { theme } = useContext(themeContext);

  return (
    <div className={theme}>
      <footer>
        <Helmet>
          <style type="text/css">{`
            footer {
              width: 100%;
            }
            
            .inside-footer {
              width: var(--mainWidth);
              margin: var(--mainMargin);
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-between;
              padding: 12px 0px;
            }

            .inside-footer > div{
              margin: 7px 0px;
            }
  
            @media (min-width: 768px){
              .inside-footer {
                flex-direction: row;
              }
              .inside-footer > div{
                margin: 0px 0px;
              }
            }
          `}</style>
        </Helmet>
        <div className="inside-footer">
          <div className="made">
            Made With <span className="icon-heart"></span> By Yahia Muhammad ©
            2023
          </div>
          <div className="social">
            <Link to={"https://api.whatsapp.com/send/?phone=201015678247"} target="_blank">
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
        </div>
      </footer>
    </div>
  );
};

export default Footer;

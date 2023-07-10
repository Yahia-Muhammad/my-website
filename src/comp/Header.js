import "./Header.css";
import myLogo from "../images/Untitled-1.png";
import { useState, useContext } from "react";
import themeContext from "../config/Theme";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [showHeader, setShowHeader] = useState("");
  const [hideHeader, setHideHeader] = useState("");
  const { theme, changeTheme } = useContext(themeContext);

  return (
    <div className="cont-header">
      <header>
        <div className="logo">
          <img src={myLogo} alt="Logo" />
        </div>
        <div className={`in-header ${showHeader} ${hideHeader} ${theme}`}>
          <div className="closeMenu">
            <span
              className="icon-cross click"
              style={{ fontSize: "25px" }}
              onClick={() => {
                setShowHeader("");
                setHideHeader("hide-header");
                setTimeout(() => {
                  setHideHeader("");
                }, 500);
              }}
            ></span>
          </div>
          <ul>
            <li className="click">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="click">
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li className="click">
              <NavLink to={"/projects"}>Projects</NavLink>
            </li>
            <li className="click">
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
          </ul>
          {/* Btn Toggle Theme */}
          {/* 
          <div className="switch-mode">
            <div
              className="btn-container"
              onChange={() => {
                changeTheme();
              }}
            >
              <label className="switch btn-color-mode-switch">
                {localStorage.getItem("theme") === "light" ? (
                  <input
                    type="checkbox"
                    name="color_mode"
                    id="color_mode"
                    defaultValue={1}
                  />
                ) : (
                  <input
                    type="checkbox"
                    name="color_mode"
                    id="color_mode"
                    defaultValue={1}
                    defaultChecked
                  />
                )}
                <label
                  htmlFor="color_mode"
                  data-on="Dark"
                  data-off="Light"
                  className="btn-color-mode-switch-inner click"
                />
              </label>
            </div>
          </div>
           */}
          {/* Btn Toggle Theme */}
        </div>
        <div className="openMenu">
          <span
            className="icon-bars click"
            style={{ fontSize: "30px" }}
            onClick={() => {
              setShowHeader("show-header");
              setHideHeader("");
            }}
          ></span>
        </div>
      </header>
    </div>
  );
};

export default Header;

import React from "react";
// import logo from "../images/logo.svg";
import logo from "../images/Explore (1).png";
import { PageLinks, SocialLinks } from "./Data";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img
              src={logo}
              className="nav-logo"
              style={{ height: "3rem" }}
              alt="backroads"
            />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          {/* <!-- left this comment on purpose --> */}
          {/* instead of separate listing of old and basic approach we have done here map function and make our code simple after just creating only singe Data.js file. it is pretty cool */}
          <ul className="nav-links" id="nav-links">
            {PageLinks.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.href} className="nav-link">
                    {link.text}
                  </a>
                </li>
              );
            })}
            {/* <li>
              <a href="#home" className="nav-link">
                {" "}
                home{" "}
              </a>
            </li>

            <li>
              <a href="#about" className="nav-link">
                {" "}
                about{" "}
              </a>
            </li>

            <li>
              <a href="#services" className="nav-link">
                {" "}
                services{" "}
              </a>
            </li>

            <li>
              <a href="#tours" className="nav-link">
                {" "}
                tours
              </a>
            </li> */}
          </ul>

          <ul className="nav-icons">
            {SocialLinks.map((socailLink) => {
              const { id, icon, href } = socailLink;
              return (
                <li key={id}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer" //this we have to add, otherwise we get security issues.
                    className="nav-icon"
                  >
                    <i className={icon}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;

import React from "react";
import { PageLinks, SocialLinks } from "./Data";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {PageLinks.map((page) => {
          const { id, text, href } = page;
          return (
            <li key={id}>
              <a href={href} className="footer-link">
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {SocialLinks.map((socialLink) => {
          const { id, icon, href } = socialLink;
          return (
            <li key={id}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <i className={icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Explore India travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;

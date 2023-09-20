import React from "react";
// import aboutImage from "../images/about.jpeg";
import shivrajpur from "../images/shivrajpur.jpg";
import Title from "./Title";

const About = () => {
  return (
    <section className="section" id="about">
      {/* Title is same format in multiple components so we make single component and render it over each used component. below is the reference code. */}
      <Title title="about" subtitle="us" />
      {/* <div className="section-title">
        <h2>
          about <span>us</span>
        </h2>
      </div> */}

      <div className="section-center about-center">
        <div className="about-img">
          <img
            src={shivrajpur}
            // src="./images/about.jpeg"
            className="about-photo"
            alt="awesome beach"
          />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <a href="#about" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;

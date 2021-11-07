import React from "react";
import Intro from "../Intro/Intro";
import "./About.css";

const About = () => {
  return (
    <div
      id="about"
      className="about px-4 py-6 max-w-screen-xl mx-auto lg:py-10"
    >
      <Intro />

      <div className="fact mt-6 lg:mt-10 py-4 px-8 lg:py-10 lg:px-20">
        <h1 className="text-2xl lg:text-5xl font-bold text-center">
          {" "}
          "Genesis"
        </h1>
        <p className="px-3 lg:px-20 mt-10 text-center lg:text-xl">
          Introducing Project Six1Three’s first NFT drop - "Genesis" featuring
          the amazing artwork of Jewish Brooklyn born artist Coby Katz
          (@cobykatz). Coby’s collection is made of 613 programmatically
          generated illustrations of the great Lubavitcher Rebbe. Holding onto a
          “Six1Three” token will grant you early access to future drops,
          charitable rewards, priceless prizes, and membership to an entire
          community driven by good.
        </p>
      </div>
    </div>
  );
};

export default About;
import React from "react";
import Intro from "../Intro/Intro";
import "./About.css";

const About = () => {
  return (
    <div
      id="about"
      className="about bg-custom-gradient bg-cover bg-center py-20 px-3 lg:px-0"
    >
      <Intro />

      <div className="fact mt-6 lg:mt-24 bg-black max-w-screen-xl rounded-3xl mx-auto py-10 px-8  lg:py-20 lg:px-20">
        <h1 className="text-5xl font-primary  lg:text-8xl text-center">
          {" "}
          "Genesis"
        </h1>
        <p className="px-3 lg:px-20 mt-10 text-sm text-center lg:text-lg">
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

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

      <div className="genesis px-10 lg:px-20 xl:px-0 flex flex-col lg:flex-row mt-6 lg:mt-24 max-w-6xl mx-auto py-10 lg:py-20 lg:text-lg text-black">
        <div className="flex-1">
          <img
            width="500"
            src="/images/six1three-animation-small.gif"
            className="animated-rabbi mx-auto lg:mx-0"
            alt=""
          />
        </div>
        <div className="flex-1 px-3 mt-10 lg:mt-0 lg:px-20 text-center flex flex-col justify-center">
          <img
            src="/images/gensis_logo.png"
            width={300}
            className="mx-auto"
            alt=""
          />
          <p className="mt-5 lg:mt-10">
            Our first NFT drop is titled "Genesis" it's a collection of 613
            programmatically generated pieces of art, hand illustrated by
            Brooklyn-born artist Coby Katz (@cobykatz). Each Genesis NFT is a
            collectible that also functions as a membership token, granting you
            access to the future drops, charitable rewards, exclusive merch, and
            more.
          </p>
          <p className="mt-5 lg:mt-10">
            On the launch date, each Genesis-NFT will be priced at .613 ETH,
            with 61.3% each sale going straight to charity upon sellout. The
            beauty of the blockchain is that we are able to program in a royalty
            on every re-sale, so 6.13% of every resale goes directly to charity
            in perpetuity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

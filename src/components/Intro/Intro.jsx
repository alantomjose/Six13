import React from "react";

const Intro = () => {
  return (
    <div className="intro bg-black max-w-screen-xl mx-auto rounded-3xl">
      <div className="h-full w-full py-10 px-6  lg:py-20 lg:px-20">
        <h1 className="text-center  text-6xl font-primary  lg:text-8xl">
          What is Project Six1Three?
        </h1>
        <p className="text-center  lg:text-lg my-10 lg:px-28">
          Is a community driven NFT initiative that introduces the first of its
          kind jewish community on the blockchain. 100% of the profits from the
          project will be donated to top jewish charitable foundations. We’re
          developing new and innovative ways to give back to the community
          through Mitzvot (good deeds), Tzidaka (charity), and education.
          <br />
          <br />
          Project Six1Three has been built by a passionate and dedicated team of
          jews, non jews, and everything in between, all united by a common goal
          of doing good, and giving back.
        </p>
        <div className="social-icons flex justify-center ">
          <a href="/">
            <img
              src="/images/twitter.png"
              className="mr-10"
              width="48"
              alt=""
            />
          </a>
          <a href="/">
            <img
              src="/images/discord.png"
              className="mr-10"
              width="48"
              alt=""
            />
          </a>
          <a href="/">
            <img
              src="/images/opensea.png"
              className="mr-10"
              width="48"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;

import React from "react";
import About from "../components/About/About";
// import Board from "../components/Board/Board";
import Carousel from "../components/Carousel/Carousel";
import Header from "../components/Header/Header";
import Roadmap from "../components/Roadmap/Roadmap";
import Team from "../components/Team/Team";
import FAQ from "../components/FAQ/FAQ";

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Carousel />
      <Roadmap />
      <div className="cool-image text-black  bg-custom-gradient bg-center bg-cover mt-20 lg:mt-40">
        <div className="h-full w-full text-center leading-relaxed text-lg lg:text-2xl flex justify-center flex-col items-center">
          <p className="max-w-4xl">
            The future for Project Six1Three is bright!
            <br />
            We’re excited to build this community together, lookout for upcoming
            events, IRL meetups, whitelist access to exclusive drops, and future
            benefits while holding your Project Six1Three: Genesis NFTs.
            <br />
            <br />
          </p>
          <p className="font-primary text-5xl lg:text-8xl mt-20">
            Welcome to the Tribe.
          </p>
        </div>
      </div>
      <Team />
      {/* <Board /> */}
      <FAQ />
    </div>
  );
};

export default Home;

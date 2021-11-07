import React from "react";
import About from "../components/About/About";
import Board from "../components/Board/Board";
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
      <div className="cool-image max-w-screen-xl mx-auto  bg-hero bg-center bg-cover rounded-2xl mt-20 lg:mt-40">
        <div className="bg-filter bg-black bg-opacity-60 h-full w-full text-center leading-relaxed text-4xl flex justify-center flex-col items-center">
          <p className="max-w-4xl">
            The future for Project Six1Three is bright! We’re excited to build
            this community together, lookout for upcoming events, IRL meetups,
            whitelist access to exclusive drops, and future benefits while
            holding your Project Six1Three: Genesis NFTs.
            <br />
            <br />
            Welcome to the Tribe.
          </p>
        </div>
      </div>
      <Team />
      <Board />
      <FAQ />
    </div>
  );
};

export default Home;

import React from "react";
import About from "../components/About/About";
// import Board from "../components/Board/Board";
import Carousel from "../components/Carousel/Carousel";
import Header from "../components/Header/Header";
import Roadmap from "../components/Roadmap/Roadmap";
import Team from "../components/Team/Team";
import FAQ from "../components/FAQ/FAQ";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Carousel />
      <Roadmap />

      <div className="px-3 lg:px-0">
        <div className="rounded-custom text-black max-w-screen-xl mx-auto px-10 py-20 bg-custom-gradient bg-center bg-cover mt-20 lg:mt-40">
          <div className="h-full w-full text-center leading-relaxed  lg:text-lg flex justify-center flex-col items-center">
            <p className="max-w-4xl">
              The future for Project Six1Three is bright!
              <br />
              We’re excited to build this community together, lookout for
              upcoming events, IRL meetups, whitelist access to exclusive drops,
              and future benefits while holding your Project Six1Three: Genesis
              NFTs.
              <br />
              <br />
            </p>
            <div className="dots flex gap-2 font-bold text-2xl">
              <p>.</p>
              <p>.</p>
              <p>.</p>
            </div>
            <p className="font-primary text-5xl lg:text-7xl mt-10">
              Welcome to the Tribe.
            </p>
          </div>
        </div>
      </div>
      <Team />
      {/* <Board /> */}
      <FAQ />
    </div>
  );
};

export default Home;

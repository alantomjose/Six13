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
      <Team />
      <Board />
      <FAQ />
    </div>
  );
};

export default Home;

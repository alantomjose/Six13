import React from "react";
import Intro from "../Intro/Intro";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="about px-4 py-6 lg:px-20 lg:py-10">
      <Intro />

      <div className="fact mt-6 lg:mt-10 py-4 px-8 lg:py-10 lg:px-20">
        <h1 className="text-2xl lg:text-5xl font-bold text-center">
          {" "}
          SOME COOL FACT
        </h1>
        <p className="px-3 lg:px-20 mt-10 text-center lg:text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
          omnis ex ipsa quam quisquam sapiente distinctio nostrum itaque. Dolor
          porro illo corporis eveniet vero id earum? Iusto necessitatibus fugiat
          sed?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          libero asperiores voluptatum eligendi reprehenderit consequuntur
          placeat, quo incidunt aliquid voluptatem sapiente maiores ipsum
          expedita, corrupti quod sit itaque ut in!
        </p>
      </div>

      <div className="cool-image h-screen bg-hero bg-center bg-cover rounded-2xl mt-5 lg:mt-10">
        <div className="bg-filter bg-black bg-opacity-40 h-full w-full"></div>
      </div>
    </div>
  );
};

export default About;

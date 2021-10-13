import React from "react";

const Intro = () => {
  return (
    <div className="intro rounded-xl  bg-intro  bg-top">
      <div className="bg-filter bg-black bg-opacity-50 h-full w-full py-10 px-6  lg:py-20 lg:px-20">
        <h1 className="text-center font-bold text-2xl  lg:text-5xl">
          THE PIXEL RABI PROJECT
        </h1>
        <p className="text-center  lg:text-xl my-10 lg:px-28">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
          voluptatum doloremque fugit? Voluptate in vero dolorum saepe optio?
          Fugiat, iusto! Reprehenderit accusamus id tempore tenetur incidunt,
          nobis vitae a! Deleniti quasi voluptas rem sint obcaecati.
        </p>
        <div className="social-icons flex justify-center ">
          <a href="/">
            <img
              src="/images/twitter-32.png"
              className="mr-6"
              width="48"
              alt=""
            />
          </a>
          <a href="/">
            <img
              src="/images/discord-2-32.png"
              className="mr-6"
              width="48"
              alt=""
            />
          </a>
          <a href="/">
            <img src="/images/opensea.png" className="mr-6" width="48" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;

import React from "react";

const Team = () => {
  return (
    <div
      id="team"
      className="team px-4 py-6  mt-16 max-w-screen-2xl mx-auto lg:py-10"
    >
      <h1 className="text-6xl font-primary lg:text-8xl text-center mb-8 lg:mb-16">
        TEAM
      </h1>
      <div className="grid grid-cols-4 gap-2 md:grid-cols-6 md:gap-8 lg:gap-10 lg:grid-cols-5">
        <div className="member text-custom-orange col-span-2 p-2 md:col-span-2 lg:col-span-1">
          <img src="/images/0003.jpg" width="350" alt="" />
          <p className="team__title  mt-2  text-center text-sm md:text-lg">
            ARTIST
          </p>
          <p className="team__name font-primary mt-2 text-center text-xl md:text-2xl lg:text-5xl">
            Coby
          </p>
        </div>

        <div className="member text-custom-yellow col-span-2 p-2 md:col-span-2 lg:col-span-1">
          <img src="/images/0004.jpg" width="350" alt="" />
          <p className="team__title  mt-2  text-center text-sm md:text-lg">
            DEVELOPMENT
          </p>
          <p className="team__name font-primary mt-2 text-center text-xl md:text-2xl lg:text-5xl">
            Incepthink
          </p>
        </div>
        <div className="member text-custom-green col-span-2 p-2 md:col-span-2 lg:col-span-1">
          <img src="/images/0005.jpg" width="350" alt="" />
          <p className="team__title  mt-2  text-center text-sm md:text-lg">
            CREATIVE
          </p>
          <p className="team__name font-primary mt-2 text-center text-xl md:text-2xl lg:text-5xl">
            Doni
          </p>
        </div>
        <div className="member text-custom-blue-1 col-span-2 p-2 md:col-end-4 md:col-span-2 lg:col-span-1">
          <img src="/images/0006.jpg" width="350" alt="" />
          <p className="team__title  mt-2  text-center text-sm md:text-lg">
            BUSINESS
          </p>
          <p className="team__name font-primary mt-2 text-center text-xl md:text-2xl lg:text-5xl">
            Sholi
          </p>
        </div>
        <div className="member text-custom-blue-2 col-end-4 col-span-2 p-2 md:col-end-6 md:col-span-2 lg:col-span-1">
          <img src="/images/0007.jpg" width="350" alt="" />
          <p className="team__title  mt-2  text-center text-sm md:text-lg">
            STRATEGY
          </p>
          <p className="team__name font-primary mt-2 text-center text-xl md:text-2xl lg:text-5xl">
            Mel
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;

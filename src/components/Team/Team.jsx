import React from "react";

const Team = () => {
  return (
    <div id="team" className="team  px-4 py-6  mt-16 lg:px-20 lg:py-10">
      <h1 className="font-bold text-2xl text-center mb-8 lg:mb-16 lg:text-5xl">
        TEAM
      </h1>
      <div className="grid grid-cols-4 gap-2 md:grid-cols-6 md:gap-8 lg:gap-10 lg:grid-cols-5">
        <div className="member col-span-2 p-2 md:col-span-2 lg:col-span-1">
          <img src="/images/0003.jpg" width="350" alt="" />
          <p className="team__title  mt-2  text-center text-sm md:text-lg">
            Tech Developer
          </p>
          <p className="team__name mt-1 text-center text-xl md:text-2xl lg:text-3xl font-bold">
            Pixel Rabi
          </p>
        </div>

        <div className="member col-span-2 p-2 md:col-span-2 lg:col-span-1">
          <img src="/images/0004.jpg" width="350" alt="" />
          <p className="team__title  mt-2  text-center text-sm md:text-lg">
            Marketing
          </p>
          <p className="team__name mt-1 text-center text-xl md:text-2xl lg:text-3xl font-bold">
            Pixel Rabi
          </p>
        </div>
        <div className="member col-span-2 p-2 md:col-span-2 lg:col-span-1">
          <img src="/images/0005.jpg" width="350" alt="" />
          <p className="team__title  mt-2  text-center text-sm md:text-lg">
            Team Lead
          </p>
          <p className="team__name mt-1 text-center text-xl md:text-2xl lg:text-3xl font-bold">
            Pixel Rabi
          </p>
        </div>
        <div className="member col-span-2 p-2 md:col-end-4 md:col-span-2 lg:col-span-1">
          <img src="/images/0006.jpg" width="350" alt="" />
          <p className="team__title  mt-2  text-center text-sm md:text-lg">
            PR Guy
          </p>
          <p className="team__name mt-1 text-center text-xl md:text-2xl lg:text-3xl font-bold">
            Pixel Rabi
          </p>
        </div>
        <div className="member col-end-4 col-span-2 p-2 md:col-end-6 md:col-span-2 lg:col-span-1">
          <img src="/images/0007.jpg" width="350" alt="" />
          <p className="team__title  mt-2  text-center text-sm md:text-lg">
            Artist
          </p>
          <p className="team__name mt-1 text-center text-xl md:text-2xl lg:text-3xl font-bold">
            Pixel Rabi
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;

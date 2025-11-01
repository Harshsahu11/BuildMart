import React from "react";
import banner from "../../public/Banner.jpg";

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-5 px-4 py-16 flex flex-col md:flex-row items-center justify-between rounded-xl md:mt-20">
        
        {/* Right Image (first on mobile) */}
        <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2 mt-10 md:mt-0">
          <img
            src={banner}
            alt="Banner"
            className="rounded-lg w-full md:w-[90%] md:h-[420px] h-[250px] sm:h-[300px] object-cover"
          />
        </div>

        {/* Left Text Content */}
        <div className="w-full md:w-1/2 order-2 md:order-1 mt-8 md:mt-0">
          <div className="space-y-8 md:pr-10">
            <h1 className="text-3xl md:text-5xl font-bold leading-snug">
              Hello, Welcome to the World of Projects in every{" "}
              <span className="text-pink-500">Tech-Domain!!!</span>
            </h1>

            <p className="text-base md:text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusamus molestiae modi odit natus libero ipsa suscipit eveniet
              quae neque et sit nobis aliquam veniam repudiandae quo,
              consectetur dolorum qui eaque vel praesentium atque!
            </p>

            {/* Full-width Email Input */}
            <div className="w-full">
              <label className="input input-bordered flex items-center gap-4 w-full rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  className="grow w-full"
                  placeholder="Email"
                />
              </label>
            </div>

            <button className="btn mt-6 bg-pink-500 text-white border-none hover:bg-pink-600 rounded-xl px-6 py-3">
              Send!!!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

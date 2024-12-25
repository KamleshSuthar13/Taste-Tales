import React from "react";

const Banner = () => {
  return (
    <>
      <div className="container text-textPrimary max-w-screen-2xl mx-auto px-4 md:px-10 py-10">
        <header className="text-center">
          <h1 className=" md:text-3xl text-2xl font-bold">
          "Discover the Flavors of the World <br /> with Taste <span className="text-primary">Tales</span> !"
          </h1>
          <p className="text-secondary mt-2 text-sm md:text-base">
          "Explore the best restaurants, read honest reviews, and share your dining experiences with a global community of food lovers."
          </p>
        </header>
        <div className="flex justify-center">
        <button className="my-5 px-4 py-2 bg-primary text-accent rounded hover:bg-secondary ">
          Get Started
        </button>
        </div>
      </div>
    </>
  );
};

export default Banner;

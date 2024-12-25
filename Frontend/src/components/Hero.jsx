import React from "react";

const Hero = () => {
  return (
    <>
      <div className="container max-w-screen-2xl px-4 md:px-12 mx-auto my-6 grid md:grid-cols-2 grid-cols-1 gap-12">
        <div className="text-center md:text-left flex justify-center flex-col">
          <h2 className="text-3xl font-bold mb-2">
            What is Taste <span className="text-primary">Tales</span> ?
          </h2>
          <p className="text-base ">
            <span className="font-bold ">Taste</span>
            <span className="font-bold text-primary"> Tales</span> is your
            ultimate destination for exploring the world of food. From hidden
            gems in your city to iconic global hotspots, discover restaurants,
            read genuine reviews, and connect with a community of food lovers.
            Whether you're a casual diner or a foodie, Taste Tales helps you
            turn every meal into an unforgettable story.
          </p>
          <div className="mt-4">
            <button className="md:px-12 px-24 py-2 bg-primary text-accent rounded-md shadow-lg hover:bg-secondary ">
              Explore Restaurants
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-6 md:gap-10">
            <div className="flex flex-col gap-6">
              <img
                className="rounded-2xl w-48 h-48 shadow-lg"
                src="https://img.freepik.com/free-photo/classic-luxury-restaurant-with-tables-chairs_140725-9388.jpg?semt=ais_hybrid"
                alt="dinnig table"
              />
              <img
                className="rounded-2xl w-48 shadow-lg"
                src="https://img.freepik.com/free-photo/happy-young-male-chef-cutting-red-chili-with-knife-kitchen-counter_23-2147863496.jpg?semt=ais_hybrid"
                alt="chef cooking"
              />
            </div>
            <div className="mt-8 flex flex-col gap-6">
              <img
                className="rounded-2xl w-48 shadow-lg"
                src="https://img.freepik.com/free-photo/adults-enjoying-mexican-food_23-2149663866.jpg?semt=ais_hybrid"
                alt="Friends enjoying food"
              />
              <img
                className="rounded-2xl w-48 h-48 shadow-lg"
                src="https://img.freepik.com/free-photo/side-view-grilled-beef-medallion-with-sauce-vegetables-white-plate-table_140725-11508.jpg?semt=ais_hybrid"
                alt="fine dinnig"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

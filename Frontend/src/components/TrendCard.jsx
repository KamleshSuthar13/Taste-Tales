import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { CiStar } from "react-icons/ci";

const TrendCard = ({ item }) => {
  return (
    <>
      <div className="border rounded-lg shadow-lg shadow-primary hover:shadow-textPrimary max-w-sm p-4 hover:scale-105 duration-300 m-8">
        <figure>
          <img
            className="w-full h-48 object-cover rounded-lg shadow-md shadow-primary hover:shadow-textPrimary"
            src={item.image}
            alt="image"
          />
        </figure>
        <div>
          <div className="m-4">
            <h4 className="text-lg font-bold italic">{item.name}</h4>
          </div>
          <div className="flex justify-between mx-3">
            <div className="px-4 py-1 text-sm cursor-default bg-accent border-textPrimary rounded-xl border">
                {item.cuisine}
            </div>
            <div className="px-4 py-1 text-sm cursor-default bg-accent border-textPrimary rounded-xl border flex items-center gap-2 ">
              <CiLocationOn className="text-xl" />
              {item.location}
            </div>
          </div>
          <div className="flex justify-between m-3">
            <div className="px-4 py-1 text-sm cursor-default bg-accent border-textPrimary rounded-xl border flex items-center gap-2">
              <CiStar className="text-xl fill-primary" /> {item.rating} / 5
            </div>
            <div className="px-4 py-1 text-sm bg-primary hover:bg-textPrimary text-white  cursor-pointer rounded-md ">
              View Details 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendCard;

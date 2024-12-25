import React from "react";
import { IoRestaurant } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

const ReviewCard = ({ review }) => {
  return (
    <>
      <div className="border text-center border-accent max-w-lg rounded-lg shadow-xl m-8 p-7 md:mx-10">
        <div className="border border-primary bg-accent p-7 rounded-xl ">
          <div className="italic text-textPrimary">
            <span className="font-extrabold italic text-primary">"</span>{review.review}
            <span className="font-extrabold italic text-primary">"</span>
          </div>
          <div className="my-3">
            <p className="text-xl"> - {review.reviewer}</p>
            <div className="mx-8 mt-5 flex flex-col gap-2 items-center">
                <div className="flex items-center gap-2"><IoRestaurant className="text-xl"/>{review.restaurant.name}</div>
                <div className="flex items-center gap-2"><CiLocationOn className="text-xl"/>{review.restaurant.location}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;

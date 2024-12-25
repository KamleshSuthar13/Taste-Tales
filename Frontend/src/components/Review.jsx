import React from "react";
import ReviewCard from "./ReviewCard";
import review from "../components/Review.json";
import Slider from "react-slick";

const Review = () => {
  console.log(review);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false
        },
      },
    ],
  };  
  

  return (
    <>
      <div className="container max-w-screen-2xl px-4 md:px-12 mx-auto my-20">
        <h2 className="text-2xl font-bold text-textPrimary">
          What Peoples are Saying ?
        </h2>
        <div className="slider-container">
        <Slider {...settings}>
          {review.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Review;

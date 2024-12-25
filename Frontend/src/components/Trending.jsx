import React from "react";
import TrendCard from "./TrendCard";
import list from "../../src/components/Trending.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Trending = () => {
    console.log();

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
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
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
        <h2 className="text-2xl font-bold text-textPrimary">Trending Now !</h2>
        <div className="slider-container mb-8">
        <Slider {...settings}>
            {list.map((item) => (
                <TrendCard item={item} key={item.id} />
            ))}
        </Slider>
        </div>
      </div>
    </>
  );
};

export default Trending;

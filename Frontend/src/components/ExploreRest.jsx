import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const ExploreRest = () => {
  const cityData = {
    "Top cities in India": [
      "Delhi",
      "Mumbai",
      "Bangalore",
      "Chennai",
      "Kolkata",
      "Hyderabad",
      "Pune",
      "Ahmedabad",
      "Jaipur",
      "Goa",
      "Kochi",
      "Lucknow",
      "Chandigarh",
      "Bhubaneswar",
      "Indore",
      "Surat",
      "Vadodara",
    ],
    "Top cities in World": [
      "Paris",
      "Tokyo",
      "New York",
      "Barcelona",
      "London",
      "Bangkok",
      "Rome",
      "Hong Kong",
      "Milan",
      "Los Angeles",
      "Copenhagen",
      "Dubai",
      "San Sebastián",
      "Shanghai",
      "Lisbon",
      "Amsterdam",
      "Singapore",
      "Sydney",
    ],
  };

  const [activeTab, setActiveTab] = useState("Top cities in India");

  return (
    <>
      <div className="container max-w-screen-2xl mx-auto px-4 md:px-12 m-8 ">
        <h2 className="text-2xl font-bold text-textPrimary mb-10">
          "Popular Cities to Dine In"
        </h2>
        <div className="border px-2 border-primary">
          <div className="flex gap-6 font-semibold ">
            {Object.keys(cityData).map((title) => (
              <div
                key={title}
                className={`p-3 border-b-4 cursor-default ${
                  activeTab === title
                    ? "border-primary duration-1000  "
                    : "border-transparent"
                }`}
                onClick={() => setActiveTab(title)}
              >
                {title}
              </div>
            ))}
          </div>
          <div>
            <ul className="grid grid-cols-2 md:grid-cols-3 mx-8 my-6 gap-6">
              {cityData[activeTab].map((city, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 justify-between md:mr-16 mr-4"
                >
                  <span>{city}</span>
                  <span>
                    <FaAngleDown />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreRest;

import React from "react";
import { Link } from "react-router";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="container flex flex-col text-center justify-center bg-accent text-textPrimary max-w-screen-2xl mx-auto px-4 md:px-10 py-5 ">
        <div className="space-y-2">
          <h2 className="text-xl font-bold">Taste <span className="text-primary">Tales</span></h2>
          <p className="text-xs md:text-base">
            Your trusted source for honest restaurent reviews.
          </p>
        </div>
        <div className="my-8 ">
          <ul className="flex md:flex-row flex-col items-center justify-center md:text-sm text-xs gap-4">
            <li className="hover:text-primary">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-primary">
              <Link to="/">Contact</Link>
            </li>
            <li className="hover:text-primary">
              <Link to="/">About Us</Link>
            </li>
            <li className="hover:text-primary">
              <Link to="/">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-base mb-4">Follow Us:</p>
          <div className="flex gap-6 justify-center">
            <div className="md:text-2xl text-xl ">
              <Link>
                <FaFacebookF />
              </Link>
            </div>
            <div className="md:text-2xl text-xl ">
              <Link>
                <FaXTwitter />
              </Link>
            </div>
            <div className="md:text-2xl text-xl ">
              <Link>
                <FaInstagram />
              </Link>
            </div>
            <div className="md:text-2xl text-xl ">
              <Link>
                <FaYoutube />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <p> &copy; {new Date().getFullYear()} Taste Tales All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router";

const ResponseMenu = ({ open }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="absolute top-14 right-0 w-3/5 h-screen z-20"
          >
            <div className="text-xl font-semibold text-textPrimary border m-2 py-2 shadow-xl rounded-xl bg-accent ">
              <ul className=" flex flex-col items-center gap-1">
                <li className="hover:text-primary">
                  <Link to="/">Home</Link>
                </li>
                <li className="hover:text-primary">
                  <Link to="/">Dashboard</Link>
                </li>
                <li className="hover:text-primary">
                  <Link to="/">Contact</Link>
                </li>
                <li className="hover:text-primary">
                  <Link to="/">About</Link>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ResponseMenu;

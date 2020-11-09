import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Div Varients
const DivVariants = {
   hidden: {
      opacity: 0,
      x: "-100vw",
   },
   visible: {
      opacity: 1,
      x: 0,
      transition: {
         type: "spring",
         stiffness: 120,
      },
   },
   exit: {
      x: "-100vw",
      transition: {
         ease: "easeInOut",
      },
   },
};

// Title Varients
const TitleVariants = {
   hidden: {
      scale: 0,
   },
   visible: {
      scale: 1,
      transition: {
         delay: 1.2,
         type: "spring",
         stiffness: 120,
      },
   },
};

// Button Variants
const ButtonVariants = {
   hover: {
      scale: 1.2,
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
         duration: 0.3,
         yoyo: Infinity,
      },
   },
};

const Home = () => {
   return (
      <motion.div
         variants={DivVariants}
         initial="hidden"
         animate="visible"
         exit="exit"
         className="Home mt-5"
      >
         <motion.h2 variants={TitleVariants} initial="hidden" animate="visible">
            Ready To create your day schedule ?
         </motion.h2>
         <Link to="/mode">
            <motion.button variants={ButtonVariants} whileHover="hover">
               Start
            </motion.button>
         </Link>
      </motion.div>
   );
};

export default Home;

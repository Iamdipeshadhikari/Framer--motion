import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const DivContainer = {
   hidden: {
      opacity: 0,
   },
   visible: {
      opacity: 1,
   },
   exit: {
      x: "-100vw",
      transition: {
         ease: "easeInOut",
      },
   },
};

const UlVariants = {
   hidden: {
      transform: "scale(0)",
   },
   visible: {
      transform: "scale(1)",
      transition: {
         type: "spring",
         delay: 1,
         staggerChildren: 0.4,
         when: "beforeChildren",
      },
   },
};

const LiChildVariants = {
   hidden: {
      opacity: 0,
   },
   visible: {
      opacity: 1,
   },
   hover: {
      scale: 1.2,
      transition: {
         type: "spring",
         stiffness: 120,
      },
   },
};

const TitleVariants = {
   hidden: {
      opacity: 0,
      transform: "scale(0)",
   },
   visible: {
      opacity: 1,
      transform: "scale(1)",
      transition: {
         type: "spring",
         stiffness: 120,
         delay: 0.5,
      },
   },
};

const ButtonVariants = {
   hidden: {
      x: "100vw",
   },
   visible: {
      x: 0,
      transition: {
         type: "spring",
         stiffness: 120,
         delay: 0.5,
      },
   },
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

const Mode = ({ addMode, schedule }) => {
   const Modes = ["normal", "happy", "sad"];

   return (
      <motion.div
         variants={DivContainer}
         initial="hidden"
         animate="visible"
         exit="exit"
         className="Mode"
      >
         <motion.h2 variants={TitleVariants} initial="hidden" animate="visible">
            Step 1: How is your mode
         </motion.h2>

         <motion.ul variants={UlVariants} initial="hidden" animate="visible">
            {Modes.map((mode) => {
               let spanClass = schedule.mode === mode ? "active" : "";

               return (
                  <motion.li variants={LiChildVariants} whileHover="hover">
                     <span onClick={() => addMode(mode)} className={spanClass}>
                        {mode}
                     </span>
                  </motion.li>
               );
            })}
         </motion.ul>

         <Link to="/todo">
            <motion.button
               variants={ButtonVariants}
               initial="hidden"
               animate="visible"
               whileHover="hover"
            >
               Next
            </motion.button>
         </Link>
      </motion.div>
   );
};

export default Mode;

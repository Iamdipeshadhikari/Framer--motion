import React from "react";
import LOGO from "../images/stopwatch.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
   return (
      <motion.div
         initial={{ y: -300 }}
         animate={{ y: -10 }}
         transition={{ type: "spring", delay: 0.5, stiffness: 120, duration: 0.5 }}
         className="Header d-flex justify-content-center align-items-center"
      >
         <Link to="/">
            <motion.img
               initial={{ opacity: 0, x: "-100vw" }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5 }}
               whileHover={{ scale: 0.8, rotate: 360 }}
               whileTap={{ scale: 1.5 }}
               className="mr-5"
               src={LOGO}
               alt="Logo"
            />
         </Link>
         <motion.h1
            initial={{ opacity: 0, x: "100vw" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 120 }}
         >
            Plan your schedule
         </motion.h1>
      </motion.div>
   );
};

export default Header;

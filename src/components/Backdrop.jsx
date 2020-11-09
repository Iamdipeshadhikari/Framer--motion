import React from "react";
import { motion } from "framer-motion";

const BackdropVariant = {
   hidden: {
      opacity: 0,
   },
   visible: {
      opacity: 1,
      transition: {
         duration: 0.5,
      },
   },
};

const Backdrop = () => {
   return (
      <motion.div
         variants={BackdropVariant}
         initial="hidden"
         animate="visible"
         className="Backdrop"
      ></motion.div>
   );
};

export default Backdrop;

import React from "react";
import Backdrop from "./Backdrop";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const ModalVarients = {
   hidden: {
      opacity: 0,
   },
   visible: {
      opacity: 1,
      transition: {
         type: "spring",
         duration: 1,
         stiffness: 120,
         staggerChildren: 0.5,
      },
   },
};

const ChildVarients = {
   hidden: {
      y: -500,
      transform: "scale(0)",
   },

   visible: {
      y: 0,
      transform: "scale(1)",
      transition: {
         type: "spring",
         stiffness: 120,
      },
   },
};

const Modal = ({ showModal, setShowModal, setSchedule }) => {
   const CloseModal = () => {
      setShowModal(false);
      setSchedule({
         mode: "",
         todo: [],
      });
   };

   return (
      <AnimatePresence>
         {showModal && (
            <>
               <Backdrop />
               <motion.div
                  variants={ModalVarients}
                  initial="hidden"
                  animate="visible"
                  className="Modal"
                  exit="hidden"
               >
                  <motion.h2 variants={ChildVarients}>Wanna try one more time</motion.h2>
                  <Link onClick={CloseModal} to="/">
                     <motion.button variants={ChildVarients}>Start Again</motion.button>
                  </Link>
               </motion.div>
            </>
         )}
      </AnimatePresence>
   );
};

export default Modal;

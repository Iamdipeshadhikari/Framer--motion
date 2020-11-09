import React from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";

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
         delay: 1,
         stiffness: 120,
      },
   },
};

const UlVariants = {
   hidden: {
      opacity: 0,
      x: "100vw",
   },
   visible: {
      opacity: 1,
      x: 0,
      transition: {
         type: "spring",
         stiffness: 120,
         staggerChildren: 0.5,
         when: "beforeChildren",
      },
   },
};

const LiChildVariants = {
   hidden: {
      opacity: 0,
      transform: "scale(0.5)",
   },
   visible: {
      opacity: 1,
      transform: "scale(1)",
      transition: {
         type: "spring",
         stiffness: 120,
      },
   },
};

const Schedule = ({ schedule, history, setShowModal }) => {
   useEffect(() => {
      if (!schedule.mode || schedule.todo.length === 0) {
         history.push("/");
      }

      setTimeout(() => {
         setShowModal(true);
      }, 5000);
   }, [schedule, history, setShowModal]);

   return (
      <motion.div
         variants={DivContainer}
         initial="hidden"
         animate="visible"
         exit="exit"
         className="Schedule"
      >
         <motion.h2 variants={TitleVariants} initial="hidden" animate="visible">
            Follow This Day Schedule to feel better
         </motion.h2>

         <motion.div
            variants={UlVariants}
            initial="hidden"
            animate="visible"
            className="Schedule--box"
         >
            <h3>
               Your Mood is{" "}
               {schedule.mode && (
                  <motion.span variants={LiChildVariants}>{schedule.mode}</motion.span>
               )}
               : Do these Tasks
            </h3>

            <ul>
               {schedule.todo.map((todo) => (
                  <motion.li variants={LiChildVariants}>{todo}</motion.li>
               ))}
            </ul>
         </motion.div>
      </motion.div>
   );
};

export default Schedule;

import React, { useEffect } from "react";
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
      opacity: 0,
   },
   visible: {
      opacity: 1,
      transition: {
         delay: 1,
         staggerChildren: 0.5,
         when: "beforeChildren",
      },
   },
};

const LiChildVariants = {
   hidden: {
      opacity: 0,
      y: "3rem",
   },
   visible: {
      opacity: 1,
      y: 0,
      transition: {
         type: "spring",
         stiffness: 120,
         duration: 0.5,
      },
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
         delay: 1,
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
         delay: 1,
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

const Todo = ({ addTodo, schedule, history }) => {
   useEffect(() => {
      if (!schedule.mode) {
         history.push("/mode");
      }
   }, [schedule, history]);

   const Todos = [
      "React Coding",
      "Node Coding",
      "Gatsby Coding",
      "Movie",
      "Music",
      "Chatting",
      "Exercise",
      "Learning",
      "Playing",
      "Talk To Someone",
      "Internet Surffing",
      "Learning Englist",
   ];

   return (
      <motion.div
         variants={DivContainer}
         initial="hidden"
         animate="visible"
         exit="exit"
         className="Todo"
      >
         <motion.h2 variants={TitleVariants} initial="hidden" animate="visible">
            Step 2: Select Things You Want to do.
         </motion.h2>

         <div className="row">
            <div className="col-md-8">
               <motion.ul variants={UlVariants} initial="hidden" animate="visible">
                  {Todos.map((todo) => {
                     let spanClass = schedule.todo.includes(todo) ? "active" : "";
                     return (
                        <motion.li
                           variants={LiChildVariants}
                           whileHover="hover"
                           onClick={() => addTodo(todo)}
                        >
                           <span className={spanClass}>{todo}</span>
                        </motion.li>
                     );
                  })}
               </motion.ul>
            </div>

            <div className="col-md-4">
               <Link to="/schedule">
                  <motion.button
                     variants={ButtonVariants}
                     whileHover="hover"
                     initial="hidden"
                     animate="visible"
                  >
                     Next
                  </motion.button>
               </Link>
            </div>
         </div>
      </motion.div>
   );
};

export default Todo;

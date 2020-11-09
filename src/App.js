import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Home from "./components/Home";
import Mode from "./components/Mode";
import Todo from "./components/Todo";
import Schedule from "./components/Schedule";
import Modal from "./components/Modal";

function App() {
   const [schedule, setSchedule] = useState({ mode: "", todo: [] });
   const [showModal, setShowModal] = useState(false);
   const location = useLocation();

   const addMode = (mode) => {
      setSchedule({ ...schedule, mode });
   };

   const addTodo = (todo) => {
      let newTodo;
      if (!schedule.todo.includes(todo)) {
         newTodo = [...schedule.todo, todo];
      } else {
         newTodo = schedule.todo.filter((item) => item !== todo);
      }

      setSchedule({ ...schedule, todo: newTodo });
   };

   return (
      <div className="app">
         <div className="container">
            <Modal
               setShowModal={setShowModal}
               showModal={showModal}
               setSchedule={setSchedule}
            />
            <Header />

            <AnimatePresence>
               <Switch location={location} key={location.key}>
                  <Route
                     path="/"
                     exact
                     render={(renderProps) => <Home {...renderProps} />}
                  />

                  <Route
                     path="/mode"
                     render={(renderProps) => (
                        <Mode addMode={addMode} schedule={schedule} {...renderProps} />
                     )}
                  />
                  <Route
                     path="/todo"
                     render={(renderProps) => (
                        <Todo addTodo={addTodo} schedule={schedule} {...renderProps} />
                     )}
                  />
                  <Route
                     path="/schedule"
                     render={(renderProps) => (
                        <Schedule
                           schedule={schedule}
                           setShowModal={setShowModal}
                           {...renderProps}
                        />
                     )}
                  />
               </Switch>
            </AnimatePresence>
         </div>
      </div>
   );
}

export default App;

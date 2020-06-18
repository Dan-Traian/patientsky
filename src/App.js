import React from "react";
import "./App.scss";
import "./tailwind.generated.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation
} from "react-router-dom";

import { TransitionGroup, CSSTransition } from "react-transition-group";

import Nav from "./components/Nav";
import Patients from "./components/_pages/Patients";
import Appointments from "./components/_pages/Appointments";
import Login from "./components/_pages/Login";
import NotFound from "./components/_pages/NotFound";
import NotDone from "./components/_pages/NotDone";
import Patient from "./components/_pages/Patient";
import Schedule from "./components/_pages/Schedule";

function App() {
  return (
    <div
      id="App"
      className="w-screen min-h-screen max-w-screen overflow-x-hidden flex justify-center bg-washed-white"
    >
      <div className="content w-full flex flex-col  mx-auto max-w-screen overflow-x-hidden border-r border-l border-gray-300">
        <Router>
          <Route path="*">
            <AnimationApp />
          </Route>
        </Router>
      </div>
    </div>
  );
}

function AnimationApp() {
  let location = useLocation();

  return (
    <div className="w-full">
      <Nav />
      <div className="w-full  px-4 mac:px-0">
        <TransitionGroup>
          {/*
            This is no different than other usage of
            <CSSTransition>, just make sure to pass
            `location` to `Switch` so it can match
            the old location as it animates out.
          */}
          <CSSTransition key={location.key} classNames="fade" timeout={500}>
            <Switch location={location}>
              <Route exact path="/" children={<Appointments />} />
              <Route exact path="/login" children={<Login />} />
              <Route exact path="/appointments" children={<Appointments />} />
              <Route exact path="/patients" children={<Patients />} />
              <Route exact path="/patients/:id" children={<Patient />} />
              <Route exact path="/schedule" children={<Schedule />} />
              <Route exact path="/reports" children={<NotDone />} />
              <Route exact path="*" children={<NotFound />} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}

export default App;

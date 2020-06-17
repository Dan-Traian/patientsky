import React from "react";
import "./App.scss";
import "./tailwind.generated.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
          <Nav />
          <div className="w-full  px-4 mac:px-0">
            <Switch>
              <Route exact path="/">
                <Appointments />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/appointments">
                <Appointments />
              </Route>
              <Route exact path="/patients">
                <Patients />
              </Route>
              <Route exact path="/patients/:id">
                <Patient />
              </Route>
              <Route exact path="/schedule">
                <Schedule />
              </Route>
              <Route exact path="/reports">
                <NotDone />
              </Route>
              <Route exact path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;

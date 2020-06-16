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

function App() {
  return (
    <div
      id="App"
      className="w-screen min-h-screen max-w-screen overflow-x-hidden flex justify-center bg-gray-100"
    >
      <div className="content w-full flex flex-col  mx-auto max-w-screen overflow-x-hidden">
        <Router>
          <Nav />
          <div className="w-full  px-10 mac:px-0" />

          <Switch>
            <Route exact path="/">
              <Login />
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
            <Route exact path="/departments">
              <NotDone />
            </Route>
            <Route exact path="/reports">
              <NotDone />
            </Route>
            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;

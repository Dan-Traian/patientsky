import React from "react";
import "./App.scss";
import "./tailwind.generated.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Patients from "./components/_pages/Patients";

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

          <Route to={"/patients"} component={Patients} />
        </Router>
      </div>
    </div>
  );
}

export default App;

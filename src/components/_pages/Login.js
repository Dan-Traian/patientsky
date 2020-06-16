import * as React from "react";

import login from "./../../assets/login.svg";
import logo from "./../../assets/logo2.svg";
import {
  IoIosLock,
  BsToggleOn,
  MdEmail,
  BsArrowUpRight
} from "react-icons/all";
import { NavLink, Route } from "react-router-dom";
import Appointments from "./Appointments";
class Patients extends React.Component {
  render() {
    return (
      <div className="w-screen h-screen fixed z-999 bg-teal-faded flex">
        <div className="fixed p-10">
          <img className=" h-16 w-16" src={logo} alt="" />
        </div>

        <div className="w-1/2 h-screen bg-white flex items-center justify-center">
          <img className="w-full max-w-xl" src={login} alt="" />
        </div>
        <div className="w-1/2 h-screen flex items-center justify-center ">
          <div className="w-1/2  px-3 py-10 bg-white  rounded-xl max-w-xl shadow-lg">
            <div className="w-full p-4">
              <h1 className="text-4xl text-teal-main mb-3">Login</h1>

              <p className="text-base text-gray-700 mt-3 ">
                Social security number *
              </p>
              <div className="w-full flex items-center border border-gray-300 rounded-md mb-2 p-3">
                <input className="w-full bg-white" type="text" placeholder="" />
                <MdEmail className="text-xl text-teal-main ml-3" />
              </div>
              <p className="text-base text-gray-700 mt-3 ">Password *</p>
              <div className="w-full flex items-center border border-gray-300 rounded-md mb-2 p-3">
                <input
                  className="w-full bg-white"
                  type="password"
                  placeholder=""
                />
                <IoIosLock className="text-xl text-teal-main ml-3" />
              </div>

              <div className="w-full flex items-center">
                <p className="text-base text-gray-700 flex items-center ">
                  Remember me?
                  <BsToggleOn className="text-4xl text-teal-main ml-3" />
                </p>
                <p className="text-base text-gray-700 ml-auto ">
                  Forgot password?{" "}
                  <Route exact path="/appointments">
                    <Appointments />
                  </Route>
                </p>
              </div>
              <NavLink to="/appointments">
                <button
                  type="button"
                  className="patientButton w-full mt-4 bg-teal-main text-white text-xl px-3 py-2 flex items-center"
                >
                  Submit
                  <BsArrowUpRight className="text-2xl text-whiten ml-auto" />
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Patients;

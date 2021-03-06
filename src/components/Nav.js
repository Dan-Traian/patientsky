import React from "react";

import logo from "./../assets/logo.svg";

import { NavLink } from "react-router-dom";

import {
  RiSearchLine,
  RiNotification2Line,
  FcBusinesswoman,
  AiFillSetting,
  AiOutlineLogout
} from "react-icons/all";

class Nav extends React.Component {
  render() {
    return (
      <div className="fixed h-16 t-0 l-0 w-full flex p-2 bg-white border-b border-sm border-gray-300">
        <div className="w-full max-w-9xl flex items-center mx-auto  text-gray-600">
          <NavLink to="/">
            <img src={logo} alt="Logo" className="h-10 w-auto m-2 mr-10" />
          </NavLink>
          <div className="flex items-center">
            <NavLink
              to="/appointments"
              activeClassName="font-bold text-teal-main"
            >
              <p className="text-base mx-6 ">Appointments</p>
            </NavLink>
            <NavLink to="/patients" activeClassName="font-bold text-teal-main">
              <p className="text-base mx-6">Patients</p>
            </NavLink>
            <NavLink to="/schedule" activeClassName="font-bold text-teal-main">
              <p className="text-base mx-6 flex items-center">Schedule</p>
            </NavLink>
            <NavLink to="/reports" activeClassName="font-bold text-teal-main">
              <p className="text-base mx-6 flex items-center">
                Reports
                <span className="bg-blue-accent text-white px-1 rounded-lg text-xs ml-2">
                  wip
                </span>{" "}
              </p>
            </NavLink>
          </div>

          <div className="ml-auto flex items-center ">
            <div className="w-64 py-2 px-4  flex items-center border border-gray-400 rounded-md  bg-gray-200">
              <input
                className="w-full  bg-gray-200"
                type="text"
                placeholder="Search ..."
              />
              <RiSearchLine className="icon text-gray-600 ml-auto" />
            </div>

            <AiFillSetting className="icon text-gray-600 mx-4 " />
            <RiNotification2Line className="icon text-gray-600 mx-4 " />
          </div>
          <div className="ml-3 flex items-center">
            <div className="w-10 h-10 p-2 flex items-center justify-center rounded-full bg-blue-500">
              <FcBusinesswoman className="w-6 h-6 text-gray-600 " />
            </div>
            <p className="text-gray-800 text-base bold mx-2">Dr Diana Lester</p>
            <NavLink to="/login">
              <AiOutlineLogout className="w-6 h-6 text-gray-600 " />
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;

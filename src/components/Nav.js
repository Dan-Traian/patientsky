import React from "react";

import logo from "./../assets/logo.svg";

import { Link } from "react-router-dom";

import { RiSearchLine } from "react-icons/ri";
import { RiNotification2Line } from "react-icons/ri";
import { FcBusinesswoman } from "react-icons/fc";
import { AiFillSetting } from "react-icons/ai";

class Nav extends React.Component {
  render() {
    return (
      <div className="fixed h-16 t-0 l-0 w-screen flex p-2 bg-white border-b border-sm border-gray-300">
        <div className="w-full max-w-9xl flex items-center mx-auto ">
          <img src={logo} alt="Logo" className="h-10 w-auto m-2 mr-10" />
          <div className="flex items-center">
            <Link to="/Appointments">
              <p className="text-base text-teal-main bold mx-6 ">
                Appointments
              </p>
            </Link>
            <Link to="/patients">
              <p className="text-base text-gray-600 bold mx-6">Patients</p>
            </Link>
            <Link to="/departments">
              <p className="text-base text-gray-600 bold mx-6">Departments</p>
            </Link>
            <Link to="/reports">
              <p className="text-base text-gray-600 bold mx-6">Reports</p>
            </Link>
          </div>

          <div className="ml-auto flex items-center ">
            <RiSearchLine className="icon text-gray-600 mx-4 " />
            <AiFillSetting className="icon text-gray-600 mx-4 " />
            <RiNotification2Line className="icon text-gray-600 mx-4 " />
          </div>
          <div className="ml-3 flex items-center">
            <div className="w-10 h-10 p-2 flex items-center justify-center rounded-full bg-blue-500">
              <FcBusinesswoman className="w-6 h-6 text-gray-600 " />
            </div>
            <p className="text-gray-800 text-base bold mx-2">Dr Diana Lester</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;

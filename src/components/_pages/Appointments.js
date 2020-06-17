import * as React from "react";

import { AiTwotoneCalendar } from "react-icons/ai";
import { BsClock } from "react-icons/bs";
import { FaBriefcaseMedical } from "react-icons/fa";

import CardFile from "./appointments/CardFile";
import Appointment from "./appointments/Appointment";
import PatientCard from "./appointments/PatientCard";

import doctor from "./../../assets/img/doctor.svg";
import SearchBarInput from "./patients/SearchBarInput";

function AppointmentsCards() {
  const listItems = [];
  for (let i = 0; i < 6; i++) {
    listItems.push(<Appointment key={i} />);
  }
  return listItems;
}

class Appointments extends React.Component {
  render() {
    return (
      <div className="w-full mt-16 mx-auto max-w-9xl py-4">
        <p className="text-3xl font-bold text-blue-main">Appointments</p>
        <div className="titleBar w-full flex items-center my-3">
          <div className="tabItem text-lg font-bold text-blue-main">All</div>
          <div className="tabItem text-lg  ml-10 text-gray-600">
            Visiting today
          </div>

          <div className="ml-auto w-1/4">
            <SearchBarInput placeholder="Search in appointments..." />
          </div>
        </div>

        <div className="w-full border-b border-sm border-gray-300" />

        <div className="w-full  flex">
          <div className="sidebar h-full w-1/4 pt-3 pr-3">
            <AppointmentsCards />
          </div>

          <div className="mainContent w-full flex h-screen  ">
            <div className="expandedMeta w-3/5 p-3 border-r border-l border-sm border-gray-300  h-screen">
              <div className="detail mt-2 mb-10 px-2">
                <p className="text-2xl text-gray-800 mb-3">
                  Appointment information
                </p>
                <div className="metaItem flex items-center ml-1 mb-3">
                  <AiTwotoneCalendar className="icon text-base mr-6 text-teal-main" />
                  <p className="text-base text-gray-700">13/06/2020</p>
                </div>
                <div className="metaItem flex items-center ml-1 mb-3">
                  <BsClock className="icon text-base mr-6 text-teal-main" />
                  <p className="text-base text-gray-700">10:30/11:30 (30min)</p>
                </div>
                <div className="metaItem flex items-center ml-1 mb-3">
                  <FaBriefcaseMedical className="icon text-base mr-6 text-teal-main" />
                  <p className="text-base text-gray-700">Office visit</p>
                </div>
              </div>

              <PatientCard />

              <p className="mt-10 mb-3 text-xl text-gray-700">
                Recent documents
              </p>
              <div className="w-full flex items-center mt-3">
                <CardFile title={"Chest X-ray"} color={"teal"} />
                <CardFile title={"Blood  test"} color={"blue"} />
                <CardFile title={"Lab results"} color={"blue"} />
              </div>
            </div>
            <div className="scheduleCalendar  h-screen w-full flex items-start justify-center">
              <img src={doctor} alt="Logo" className="w-2/3 h-auto mt-32 " />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Appointments;

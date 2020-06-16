import * as React from "react";

import { AiTwotoneCalendar } from "react-icons/ai";
import { BsClock } from "react-icons/bs";
import { FaBriefcaseMedical } from "react-icons/fa";

import CardFile from "./appointments/CardFile";
import Appointment from "./appointments/Appointment";
import PassengerCard from "./appointments/PassengerCard";

import doctor from "./../../assets/img/doctor.svg";

function Appointments() {
  let appointments = [
    {
      name: "Kris Noemi",
      time: "2:30 PM / 3:30 PM (60min)"
    },
    {
      name: "Dan Roman",
      time: "10:30 AM / 11:00 AM (30min)"
    },
    {
      name: "Boyo Schmoyo",
      time: "12:30 PM / 1:00 PM (30min)"
    }
  ];

  let itemsAppointments: any[];
  itemsAppointments = [];
  appointments.forEach(item => {
    itemsAppointments.push(<Appointment title={item.name} time={item.time} />);
  });

  return (
    <div className="w-full  bg-gray-100  max-h-screen flex mx-auto max-w-9xl overflow-hidden">
      <div className="w-full mt-16  flex">
        <div className="sidebar h-full w-1/4 bg-gray-200 h-screen">
          <div className="appointments p-3">
            <div className="meta  p-3 ">
              <h1 className="text-2xl text-blue-main font-bold">
                My appointments
              </h1>
              <p className="text-md text-gray-600">Saturday June 13th</p>
            </div>
            <div className="sectionContainer p-2">{itemsAppointments}</div>
          </div>
        </div>

        <div className="mainContent w-full flex h-screen  ">
          <div className="expandedMeta w-3/5 p-3 border-r border-l border-sm border-gray-300  h-screen">
            <div className="details mt-3 p-3">
              <p className="text-lg text-gray-800 mb-3">
                Appointment information
              </p>
              <div className="metaItem flex items-center mb-3">
                <AiTwotoneCalendar className="icon text-base mr-6 text-teal-main" />
                <p className="text-base text-gray-700">13/06/2020</p>
              </div>
              <div className="metaItem flex items-center mb-3">
                <BsClock className="icon text-base mr-6 text-teal-main" />
                <p className="text-base text-gray-700">10:30/11:30 (30min)</p>
              </div>
              <div className="metaItem flex items-center mb-3">
                <FaBriefcaseMedical className="icon text-base mr-6 text-teal-main" />
                <p className="text-base text-gray-700">Office visit</p>
              </div>
            </div>
            <PassengerCard />

            <p className="mt-10 mb-3 text-xl text-gray-700">
              {" "}
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
export default Appointments;

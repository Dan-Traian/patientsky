import * as React from "react";

import { IoIosArrowDropdown } from "react-icons/io";
import { BsFilter } from "react-icons/bs";

import SearchBarInput from "./patients/SearchBarInput";
import PatientCard from "./patients/PatientCard";

class Patients extends React.Component {
  constructor(props) {
    super(props);
  }

  getPatientsCards() {
    const listItems = [];
    for (let i = 0; i < 50; i++) {
      listItems.push(<PatientCard />);
    }
    return { listItems };
  }
  render() {
    return (
      <div className="w-full bg-gray-100 mt-16 mx-auto max-w-9xl py-10">
        <p className="text-3xl font-bold text-blue-main ">Patients</p>
        <div className="titleBar w-full flex items-center my-3">
          <div className="tabItem text-lg font-bold text-blue-main">All</div>
          <div className="tabItem text-lg  ml-10 text-gray-600">
            Visiting today
          </div>

          <div className="ml-auto w-1/4">
            <SearchBarInput placeholder="Search by name" />
          </div>
        </div>

        <div className="w-full border-b border-sm border-gray-300" />

        <div className="w-full flex mt-6">
          <div className="px-3 py-2  bg-teal-light rounded-md flex justify-between items-center shadow-sm">
            <p className="text-base text-teal-main font-bold">Recent week</p>
            <IoIosArrowDropdown className="icon text-teal-main ml-10" />
          </div>
          <div className="px-3 py-2 border border-gray-400 bg-white  rounded-md flex justify-between items-center shadow-sm ml-10">
            <p className="text-base text-gray-600">Country</p>
            <IoIosArrowDropdown className="icon text-gray-600 ml-10" />
          </div>
          <div className="px-3 py-2 border border-gray-400 bg-white  rounded-md flex justify-between items-center shadow-sm ml-10">
            <p className="text-base text-gray-600">More</p>
            <BsFilter className="icon text-gray-600 ml-10" />
          </div>
        </div>

        <div className="w-full mt-4">
          <div className="flex flex-col">
            <div className="w-full px-5 py-1 mb-1 flex items-center">
              <div className="min-w-10 w-10 mr-10" />
              <div className="w-full text-md text-gray-400 ml-8">Username</div>
              <div className="w-full text-md text-gray-400">Email</div>
              <div className="w-full text-md text-gray-400">Phone</div>
              <div className="w-4/12 text-md text-gray-400">Actions</div>
            </div>
            {this.getPatientsCards()}
          </div>
        </div>
      </div>
    );
  }
}

export default Patients;

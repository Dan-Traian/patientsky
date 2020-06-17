import * as React from "react";

import SearchBarInput from "./patients/SearchBarInput";
import PatientCard from "./patients/PatientCard";
import ButtonIcon from "./patients/ButtonIcon";
import FileToggle from "./patients/FileToggle";
import { IoIosArrowDropdown, BsArrowUpShort } from "react-icons/all";

function PatientCards() {
  const listItems = [];
  for (let i = 0; i < 50; i++) {
    listItems.push(<PatientCard key={i} />);
  }
  return listItems;
}

class Patients extends React.Component {
  render() {
    return (
      <div className="w-full mt-16 mx-auto max-w-9xl py-4">
        <p className="text-3xl font-bold text-blue-main ">Patients</p>
        <div className="titleBar w-full flex items-center my-3">
          <div className="tabItem text-lg font-bold text-blue-main">All</div>
          <div className="tabItem text-lg  ml-10 text-gray-600">
            Visiting today
          </div>

          <div className="ml-auto w-1/4">
            <SearchBarInput placeholder="Search by name..." />
          </div>
        </div>

        <div className="w-full border-b border-sm border-gray-300" />

        <div className="w-full flex mt-6">
          <ButtonIcon title="Recent week" active={true} />
          <ButtonIcon title="Country" />
          <ButtonIcon title="More" />

          <div className="flex justify-between items-center ml-auto mr-10">
            <p className="text-base text-gray-600 mr-4">
              Sort by : <span className="font-bold text-gray-700 ">All</span>
            </p>
            <IoIosArrowDropdown className="icon text-gray-700" />
          </div>

          <FileToggle />
        </div>

        <div className="w-full mt-6">
          <div className="flex flex-col">
            <div className="w-full px-5 py-1 mb-1 flex items-center">
              <div className="min-w-10 w-10 mr-10" />
              <div className="w-full text-sm text-gray-500 ml-8 flex items-center">
                Username <BsArrowUpShort className="icon text-gray-500" />
              </div>
              <div className="w-full text-sm text-gray-500">Email</div>
              <div className="w-full text-sm text-gray-500">Phone</div>
              <div className="w-2/12 text-sm text-gray-500">Actions</div>
            </div>
            <PatientCards />
          </div>
        </div>
      </div>
    );
  }
}

export default Patients;

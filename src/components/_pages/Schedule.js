import * as React from "react";
import Day from "./schedule/Day";
import DayLabel from "./schedule/DayLabel";
import SearchBarInput from "./patients/SearchBarInput";
import {
  BsFillGrid3X3GapFill,
  FaThList,
  GiHamburgerMenu,
  BsArrowLeftShort,
  BsArrowRightShort,
  FiRefreshCw,
  AiOutlinePrinter
} from "react-icons/all";

function DayTabs() {
  const listItems = [];
  listItems.push(<Day inactive={true} day={30} />);
  listItems.push(<Day inactive={true} day={31} />);
  for (let i = 1; i < 30; i++) {
    listItems.push(<Day day={i} />);
  }
  for (let i = 1; i < 5; i++) {
    listItems.push(<Day inactive={true} day={i} />);
  }
  return listItems;
}

class Schedule extends React.Component {
  render() {
    return (
      <div className="w-full mt-16 mx-auto max-w-9xl py-4 pr-4">
        <p className="text-3xl font-bold text-blue-main"> My schedule</p>
        <div className="titleBar w-full flex items-center my-3">
          <p className="text-2xl text-teal-main mr-2">9</p>
          <p className="text-base text-gray-600">patients this week</p>

          <div className="ml-auto w-1/4">
            <SearchBarInput placeholder="Search for patient or case" />
          </div>
        </div>

        <div className="w-full border-b border-sm border-gray-300" />

        <div className="w-full my-4 flex items-center">
          <div className="w-1/3 ">
            <div className="mr-auto flex">
              <div className="flex items-center justify-center  border border-gray-300 rounded-md p-2 bg-white">
                <FiRefreshCw className="text-base text-gray-600 " />
              </div>
              <div className="flex items-center justify-center  border border-gray-300 rounded-md p-2 bg-white ml-2">
                <AiOutlinePrinter className="icon text-gray-600 " />
              </div>
            </div>
          </div>

          <div className="w-1/3  mx-auto flex justify-center ">
            <div className="flex items-center  border border-gray-300 rounded-md p-2 bg-white">
              <BsArrowLeftShort className="icon text-gray-600 " />
            </div>
            <p className="text-base text-gray-600 mx-1 flex items-center  border border-gray-300 rounded-md px-4 py-2  bg-white ">
              Week 26, 2020
            </p>
            <div className="flex items-center  border border-gray-300 rounded-md p-2 bg-white">
              <BsArrowRightShort className="icon text-gray-600" />
            </div>
          </div>
          <div className="w-1/3 flex ">
            <div className="ml-auto flex bg-gray-300  p-1 rounded-lg">
              <div className="px-3 py-2  flex items-center text-gray-600 rounded-lg mr-2">
                <GiHamburgerMenu className="icon text-gray-600 mr-4" /> Day
              </div>
              <div className="px-3 py-2  flex items-center text-gray-600 rounded-lg mr-2">
                <FaThList className="icon text-gray-600 mr-4" /> Week
              </div>
              <div className="px-3 py-2  flex items-center text-gray-600 rounded-lg bg-white">
                <BsFillGrid3X3GapFill className="icon text-gray-600 mr-4" />{" "}
                Month
              </div>
            </div>
          </div>
        </div>

        <div className="w-full days flex">
          <DayLabel label="Monday" />
          <DayLabel label="Tuesday" />
          <DayLabel label="Wednesday" />
          <DayLabel label="Thursday" />
          <DayLabel label="Friday" />
          <DayLabel label="Saturday" />
          <DayLabel label="Sunday" />
        </div>
        <div className="daysTabs w-full flex flex-wrap relative">
          <DayTabs />
        </div>
      </div>
    );
  }
}

export default Schedule;

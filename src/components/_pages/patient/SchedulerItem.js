import React from "react";
import { MdEventNote } from "react-icons/all";
import Faker from "faker";

class SchedulerItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="item flex items-center">
        <div className="w-1/12 h-24 flex items-center justify-center overflow-hidden">
          <div className="timeLineCircle" />
        </div>
        <div className="w-full bg-white px-5 py-2 flex border border-gray-300 rounded-md">
          <div className="w-1/4 flex flex-col justify-center">
            <p className="text-xl text-gray-700"> {this.props.time} '20</p>
            <p className="text-sm text-gray-500"> 09:00 - 10:00</p>
          </div>
          <div className="w-1/4 flex flex-col justify-center">
            <p className="text-sm text-gray-500"> Treatment</p>
            <p className="text-lg text-gray-700"> {this.props.treatment}</p>
          </div>
          <div className="w-1/4 flex flex-col justify-center">
            <p className="text-sm text-gray-500"> Doctor</p>
            <p className="text-base text-gray-700"> Dr Diana Lester</p>
          </div>
          <div className="w-1/4 flex flex-col justify-center">
            <p className="text-sm text-gray-500"> Nurse</p>
            <p className="text-base text-gray-700">
              {Faker.name.firstName() + " " + Faker.name.lastName()}
            </p>
          </div>
          <p className=" w-auto text-base text-teal-main flex items-center">
            <MdEventNote className="text-base text-teal-main mr-3" /> Notes
          </p>
        </div>
      </div>
    );
  }
}

export default SchedulerItem;

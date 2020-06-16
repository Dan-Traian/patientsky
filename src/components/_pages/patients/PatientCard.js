import React from "react";

import {
  FaUserMd,
  FaUserInjured,
  FaUserCog,
  FaUserClock
} from "react-icons/fa";

class PatientCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="w-full border border-sm border-gray-400 rounded-lg bg-white px-5 py-1 mb-1 flex items-center">
        <div className="h-10 w-10 bg-gray-400 rounded-full mr-10">
          <img
            className="h-10 w-10 rounded-full mr-10"
            src="https://picsum.photos/100"
            alt=""
          />
        </div>
        <div className="w-full text-base text-gray-600">{this.props.name}</div>
        <div className="w-full text-base text-gray-600">{this.props.email}</div>
        <div className="w-full text-base text-gray-600">{this.props.phone}</div>
        <div className="w-2/12 text-base text-gray-500 flex">
          <FaUserMd className="icon text-base mr-6" />
          <FaUserInjured className="icon text-base mr-6" />
          <FaUserCog className="icon text-base mr-6" />
          <FaUserClock className="icon text-base" />
        </div>
      </div>
    );
  }
}

export default PatientCard;

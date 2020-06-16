import React from "react";

import { IoIosArrowDropdown } from "react-icons/io";

class PatientCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getClassName() {
    return this.props.active
      ? " bg-teal-light"
      : " border border-gray-400 bg-white";
  }
  getTextClassName() {
    return this.props.active ? "teal-main" : "gray-600";
  }
  render() {
    return (
      <div
        className={
          "px-4 py-1 rounded-md flex justify-between items-center shadow-sm mr-10 pointer" +
          this.getClassName()
        }
      >
        <p className={`text-base text-${this.getTextClassName()} mr-10`}>
          {this.props.title}
        </p>
        <IoIosArrowDropdown
          className={`icon text-${this.getTextClassName()} ml-10}`}
        />
      </div>
    );
  }
}

export default PatientCard;

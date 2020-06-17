import React from "react";

class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getActiveClasses() {
    return this.props.inactive ? "stripped cursor-none" : " bg-white";
  }
  render() {
    return (
      <div
        className={`tab w-1/7 h-32 p-4 border border-gray-300 ${this.getActiveClasses()}`}
      >
        <p className="text-base text-gray-600 mt-20">{this.props.day}</p>
      </div>
    );
  }
}

export default Day;

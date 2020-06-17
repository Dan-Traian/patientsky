import React from "react";
import SchedulerItem from "./SchedulerItem";

class Scheduler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="w-full bg-gray-200 mt-3 rounded-lg px-10">
        <SchedulerItem time="15 Jun" treatment="Open Access" />
        <SchedulerItem time="04 Aug" treatment="Root canal prep" />
        <SchedulerItem time="18 Aug" treatment="Skincare check" />
      </div>
    );
  }
}

export default Scheduler;

import React from "react";

import { FaUserCircle } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

import Tag from "./Tag";

import Faker from "faker";

class Appointment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="container w-full rounded-lg bg-white p-3 mb-3 hover:shadow-md transition border border-md border-gray-300 pointer ">
        <div className="meta flex items-center justify-center ">
          <FaUserCircle className="h-16 w-16  text-gray-600 mx-3" />
          <div className="w-full h-12 flex flex-col justify-between">
            <p className="name text-lg text-gray-700 font-bold flex justify-between items-center ">
              <span>
                {Faker.name.firstName() + " " + Faker.name.lastName()}
              </span>
              <FiArrowRight className="text-blue-accent mr-4" />
            </p>
            <p className="name text-sm text-gray-600">See profile</p>
          </div>
        </div>
        <div className="spacer border-b border-sm border-gray-300 my-3" />
        <div className="w-full">
          <p className="text-sm text-gray-600 ml-3"></p>
          <div className="tags w-full flex flex-wrap my-2">
            <Tag />
            <Tag />
          </div>
        </div>
      </section>
    );
  }
}

export default Appointment;

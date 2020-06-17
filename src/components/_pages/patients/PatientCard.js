import React from "react";

import Faker from "faker";

import { BsThreeDots, FaUserMd } from "react-icons/all";

class PatientCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className="w-full border border-gray-300 rounded-lg bg-white px-5 py-1 mb-1 flex items-center pointer transition hover:border-teal-main "
        onClick={() => {
          window.location.href = "/patients/12";
        }}
      >
        <div className="h-10 w-10 bg-gray-400 rounded-full mr-10">
          <img
            className="h-10 w-10 rounded-full mr-10"
            src={Faker.internet.avatar()}
            alt=""
          />
        </div>
        <div className="w-full text-lg text-gray-700">
          {Faker.name.firstName() + " " + Faker.name.lastName()}
        </div>
        <div className="w-full text-base text-gray-600">
          {Faker.internet.email()}
        </div>
        <div className="w-full text-base text-gray-600">
          {Faker.phone.phoneNumber()}
        </div>
        <div className="w-2/12 text-base text-gray-500 flex ">
          <FaUserMd className="icon text-base mr-6" />
          <BsThreeDots className="icon text-base" />
        </div>
      </div>
    );
  }
}

export default PatientCard;

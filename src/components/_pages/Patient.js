import * as React from "react";
import Faker from "faker";
import MetaTag from "./patient/MetaTag";

class Patient extends React.Component {
  render() {
    return (
      <div className="w-full mt-16 mx-auto max-w-9xl py-4">
        <p className="text-3xl font-bold text-blue-main">Patient name</p>

        <div className="w-full border-b border-sm border-gray-300" />

        <div className="w-full  flex">
          <div className="w-2/3 py-3 pr-">
            <div className="w-full flex">
              <div className="w-1/3 mr-1 bg-white rounded-lg p-4">
                <div className="image w-full flex">
                  <img
                    className="h-32 w-32 rounded-full mx-auto mt-10"
                    src="https://s3.amazonaws.com/uifaces/faces/twitter/jackiesaik/128.jpg"
                    alt=""
                  />
                </div>

                <p className="w-full text-center text-2xl text-gray-700 font-bold mt-3">
                  {Faker.name.firstName() + " " + Faker.name.lastName()}
                </p>
                <p className="w-full text-center text-md text-gray-500 mt-2">
                  {Faker.internet.email()}
                </p>

                <div className="w-full flex items-center my-2">
                  <div className="w-1/2  p-3 flex flex-col items-center justify-center">
                    <p className=" text-2xl text-gray-700 font-bold">15</p>
                    <p className=" text-base text-gray-600 ">Past</p>
                  </div>
                  <div className="h-10 border-r-2 border-gray-400"></div>
                  <div className="w-1/2 p-3 flex flex-col items-center justify-center">
                    <p className=" text-2xl text-gray-700 font-bold">2</p>
                    <p className=" text-base text-gray-600 ">Upcoming</p>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full border border-gray-300 text-gray-700 text-base text-center py-2 rounded-lg"
                >
                  Send message
                </button>
              </div>
              <div className="w-2/3 bg-white rounded-lg flex flex-wrap p-4 mr-3">
                <MetaTag label="Gender" value="Female" />
                <MetaTag label="Birthday" value="Sep 5th, 1993" />
                <MetaTag
                  label="Phone Number"
                  value={Faker.phone.phoneNumberFormat()}
                />
                <MetaTag label="Street address" value="Fiolstræde 103tv" />
                <MetaTag label="City" value="Copenhagen" />
                <MetaTag label="Zip Code" value="1650" />
                <MetaTag label="Member status" value="Active member" />
                <MetaTag label="Registration date" value="Sep 5th, 1993" />
              </div>
            </div>
          </div>
          <div className="w-1/3 p-3 border-test py-48 px-3"></div>
        </div>
      </div>
    );
  }
}

export default Patient;

import * as React from "react";
import Faker from "faker";
import MetaTag from "./patient/MetaTag";
import { FaUserMd, FaUserCog } from "react-icons/all";
import File from "./patient/File";
import Scheduler from "./patient/Scheduler";

let name = Faker.name.firstName() + " " + Faker.name.lastName();
class Patient extends React.Component {
  render() {
    return (
      <div className="w-full mt-16 mx-auto max-w-9xl py-4 pr-4">
        <div className="w-full flex items-center">
          <p className="text-3xl font-bold text-blue-main flex items-center">
            <FaUserCog className="text-2xl mr-5 text-teal-main" />
            {name}
          </p>
          <p className="text-base text-gray-600 ml-auto">
            Back to all patients
          </p>
        </div>

        <div className="w-full border-b border-sm border-gray-300" />

        <div className="  w-full  flex mt-3">
          <div className="leftSide w-2/3  mr-3">
            <div className="profileCardFull w-full flex">
              <div className=" profileCard w-1/3 mr-3 bg-white rounded-lg p-5">
                <div className="image w-full flex">
                  <img
                    className="h-32 w-32 rounded-full mx-auto mt-10"
                    src="https://s3.amazonaws.com/uifaces/faces/twitter/jackiesaik/128.jpg"
                    alt=""
                  />
                </div>

                <p className="w-full text-center text-2xl text-gray-700 font-bold mt-3">
                  {name}
                </p>
                <p className="w-full text-center text-md text-gray-500 mt-2">
                  {Faker.internet.email()}
                </p>

                <div className="w-full flex items-center my-2">
                  <div className="w-1/2  p-3 flex flex-col items-center justify-center">
                    <p className=" text-2xl text-gray-700 font-bold">15</p>
                    <p className=" text-base text-gray-600 ">Past</p>
                  </div>
                  <div className="h-10 border-r-2 border-gray-400" />
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
              <div className=" metaCard w-2/3 bg-white rounded-lg flex flex-wrap p-5">
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
            <div className="scheduleCard w-full p-5 mt-3 bg-white rounded-lg">
              <div className="tabs w-2/3 flex items-center p-1 bg-gray-200 rounded-md">
                <div className="tab p-2 w-full bg-white flex items-center justify-center rounded-md">
                  <p className="text-base text-teal-main">
                    Upcoming Appointments
                  </p>
                </div>
                <div className="tab p-2 w-full flex items-center justify-center ">
                  <p className="text-base text-gray-500">Past Appointments</p>
                </div>
                <div className="tab p-2 w-full flex items-center justify-center ">
                  <p className="text-base text-gray-500">Medical records</p>
                </div>
              </div>

              <Scheduler />
            </div>
          </div>
          <div className=" rightSide w-1/3">
            <div className="notesCard w-full bg-white rounded-lg p-4 ">
              <div className="w-full flex items-center">
                <p className="text-2xl text-gray-600 mr-auto">Notes</p>
                <p className="text-md text-teal-main ml-auto">See all</p>
              </div>

              <div className="w-full mt-6 bg-gray-200 rounded-lg  p-4 flex flex-col ">
                <p className=" text-base  text-gray-700">
                  {Faker.lorem.sentences()}
                  {Faker.lorem.sentences()}
                </p>
                <button
                  type="button"
                  className="w-1/3 ml-auto bg-teal-main text-white text-base text-center py-2 rounded-lg mt-20"
                >
                  Save notes
                </button>
              </div>
              <p className="text-base text-gray-700 font-bold ml-3 mt-10">
                {" "}
                {Faker.lorem.sentence()}
              </p>
              <div className="w-full flex items-center mt-1">
                <FaUserMd className="text-teal-main text-base m-3" />
                <p className="text-md text-gray-600">Dr Diana Lester</p>
                <p className="text-md text-gray-600 ml-auto">15 Aug 2019</p>
              </div>
            </div>
            <div className="filesCard w-full bg-white rounded-lg p-4 mt-3 ">
              <div className="w-full flex items-center">
                <p className="text-2xl text-gray-600 mr-auto">
                  Files/documents
                </p>
                <p className="text-md text-teal-main ml-auto">Add files</p>
              </div>
              <File />
              <File />
              <File />
              <File />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Patient;

import React from "react";

import { FcBusinesswoman } from "react-icons/fc";
import { AiOutlinePhone } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { BsHouseDoor } from "react-icons/bs";
import Faker from "faker";

function PatientCard() {
  return (
    <section className="w-full bg-white rounded-lg border border-sm border-gray-300 p-6 ">
      <div className="meta flex items-center justify-center">
        <FcBusinesswoman className="h-16 w-16 mr-3" />
        <div className="w-full">
          <p className="name text-base text-gray-800 font-bold ">
            Francisca Medhurst
          </p>
          <p className="name text-sm  text-blue-accent font-bold ">
            View profile
          </p>
        </div>
      </div>
      <div className="details w-full ">
        <p className="text-base my-1 ">
          <span className="text-gray-500 mr-2">Date of birth: </span>
          <span className="text-gray-700">15/04/1992</span>
        </p>
        <p className="text-base my-1 ">
          <span className="text-gray-500 mr-2">Gender: </span>
          <span className="text-gray-700">Female</span>
        </p>
        <p className="text-base my-1 ">
          <span className="text-gray-500 mr-2">Previous visit: </span>
          <span className="text-gray-700">26/8/2020</span>
        </p>
      </div>

      <p className="mt-10 mb-3 text-xl text-gray-700"> Contacts</p>
      <div className="w-full flex items-center mt-3">
        <div className="h-10 w-10 flex items-center justify-center bg-teal-light text-teal-main rounded-full">
          <AiOutlinePhone className="icon" />
        </div>
        <p className="text-base text-gray-600 ml-2 ">
          {Faker.phone.phoneNumber()}
        </p>
      </div>
      <div className="w-full flex items-center mt-3">
        <div className="h-10 w-10 flex items-center justify-center bg-teal-light text-teal-main rounded-full">
          <FiMail className="icon" />
        </div>
        <p className="text-base text-gray-600 ml-2 ">francesca.med@gmail.com</p>
      </div>
      <div className="w-full flex items-center mt-3">
        <div className="h-10 w-10 flex items-center justify-center bg-teal-light text-teal-main rounded-full">
          <BsHouseDoor className="icon" />
        </div>
        <p className="text-base text-gray-600 ml-2 ">615 Mac Mac road 256</p>
      </div>
    </section>
  );
}

export default PatientCard;

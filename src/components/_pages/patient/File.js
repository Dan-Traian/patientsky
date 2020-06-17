import React from "react";
import { AiOutlineFileText } from "react-icons/all";
import Faker from "faker";

class File extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="w-full flex items-center mb-1 py-2 px-2 shadow-sm rounded-lg border border-gray-200">
        <AiOutlineFileText className="text-gray-700 text-2xl m-3" />
        <p className="text-md text-gray-600">{Faker.system.commonFileName()}</p>
        <p className="text-md text-gray-700 ml-auto">
          {Faker.random.number(999)}kb
        </p>
      </div>
    );
  }
}

export default File;

import React from "react";

import { RiSearchLine } from "react-icons/ri";

class SearchBarInputProps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="w-full py-2 px-4  flex items-center border border-gray-400 rounded-md  bg-gray-200">
        <input
          className="w-full  bg-gray-200"
          type="text"
          placeholder="Search in users"
        />
        <RiSearchLine className="icon text-gray-600 ml-auto" />
      </div>
    );
  }
}

export default SearchBarInputProps;

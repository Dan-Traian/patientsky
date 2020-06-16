import React from "react";

import { RiSearchLine } from "react-icons/ri";

class SearchBarInputProps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="w-full py-3 px-4 flex items-center border border-sm border-gray-400 rounded-lg bg-gray-200">
        <p className="text-base text-gray-600">{this.props.placeholder}</p>
        <RiSearchLine className="icon text-gray-600 ml-auto" />
      </div>
    );
  }
}

export default SearchBarInputProps;

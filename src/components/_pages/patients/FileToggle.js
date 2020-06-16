import React from "react";

import { BsGrid3X3Gap, FaListUl } from "react-icons/all";

class PatientCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMode: "list"
    };
  }

  render() {
    return (
      <div className="toggle flex bg-gray-300  p-1 rounded-lg">
        <div className="px-3 py-2 rounded-lg bg-white mr-2">
          <FaListUl className="icon text-gray-600" />
        </div>
        <div className="px-3 py-2 rounded-lg">
          <BsGrid3X3Gap className="icon text-gray-600" />
        </div>
      </div>
    );
  }
}

export default PatientCard;

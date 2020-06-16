import React from "react";
import { AiOutlineFileText } from "react-icons/ai";

import Faker from "faker";
class CardFile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className={`card flex mr-2 flex-col rounded-lg bg-${this.props.color}-light p-3`}
      >
        <div
          className={`w-10 h-10 flex items-center justify-center bg-${this.props.color}-main mx-auto rounded-lg`}
        >
          <AiOutlineFileText className="icon text-white" />
        </div>
        <p
          className={`text-sm text-teal-main mt-3 text-${this.props.color}-main`}
        >
          {this.props.title} <br />
          1.7MB
        </p>
      </div>
    );
  }
}

export default CardFile;

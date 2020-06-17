import React from "react";

class DayLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="w-full py-3 flex items-center justify-center text-base text-gray-500 bg-white border border-gray-300">
        {this.props.label}
      </div>
    );
  }
}

export default DayLabel;

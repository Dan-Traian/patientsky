import React from "react";

class MetaTag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="w-1/3 mb-1 h-32 flex items-center flex-col justify-center">
        <p className="text-center text-sm text-gray-500">{this.props.label}</p>
        <p className="text-center text-md text-gray-700 font-bold mt-2">
          {this.props.value}
        </p>
        <div className="w-10/12 border-b-2 border-gray-100 mt-4"></div>
      </div>
    );
  }
}

export default MetaTag;

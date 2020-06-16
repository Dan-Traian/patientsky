import * as React from "react";

import notFound from "./../../assets/404.png";

class NotFound extends React.Component {
  render() {
    return (
      <div className="w-screen h-screen fixed z-999 bg-white flex items-center justify-center">
        <img className="max-w-3xl h-auto" src={notFound} alt="" />
      </div>
    );
  }
}

export default NotFound;

import * as React from "react";

import wip from "./../../assets/wip.svg";
import { BsArrowUpRight } from "react-icons/all";
import { NavLink } from "react-router-dom";

class NotDone extends React.Component {
  render() {
    return (
      <div className="w-screen h-screen fixed z-999 bg-white flex flex-col items-center justify-center">
        <img className="max-w-lg h-auto mb-10" src={wip} alt="" />

        <p className="text-2xl text-teal-main"> Page is a work in progress</p>

        <NavLink to="/appointments">
          <button
            type="button"
            className="patientButton w-full mt-4 bg-teal-main text-white text-xl px-3 py-2 flex "
          >
            Back to dashboard
            <BsArrowUpRight className="text-2xl text-whiten ml-20" />
          </button>
        </NavLink>
      </div>
    );
  }
}

export default NotDone;

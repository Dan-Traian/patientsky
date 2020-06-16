import React from "react";
import { AiOutlineFileText } from "react-icons/ai";

type CardFileProps = {
  color: string;
  title: string;
};

function CardFile({ title, color }: CardFileProps) {
  return (
    <div className={`card flex mx-2 flex-col rounded-lg bg-${color}-light p-3`}>
      <div
        className={`w-10 h-10 flex items-center justify-center bg-${color}-main mx-auto rounded-lg`}
      >
        <AiOutlineFileText className="icon text-white" />
      </div>
      <p className={`text-sm text-teal-main mt-3 text-${color}-main`}>
        {title} <br />
        1.7MB
      </p>
    </div>
  );
}
export default CardFile;

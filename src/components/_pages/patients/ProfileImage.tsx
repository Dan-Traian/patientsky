import React from "react";

function ProfileImage() {
  return (
    <div className="w-20 h-20 flex items-center justify-center rounded-full mx-auto">
      <img
        className="w-full rounded-full"
        src="https://picsum.photos/100"
        alt=""
      />
    </div>
  );
}

export default ProfileImage;

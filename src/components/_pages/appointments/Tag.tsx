import React from "react";

function Tag() {
  let color = getRandomTag();
  let title = getRandomTagText();
  return (
    <div
      className={`tag text-sm mr-2 rounded-full py-1 px-3 font-bold flex items-center justify-center bg-${color}-light text-${color}-main`}
    >
      {title}
    </div>
  );
}
export default Tag;

let tags = ["yellow", "teal", "blue", "red"];
function getRandomTag() {
  return tags[Math.floor(Math.random() * tags.length)];
}

let tagsText = [
  "Doctor visit",
  "Check up",
  "Blood",
  "Others",
  "Video consultation",
  "Follow up",
  "Visit"
];
function getRandomTagText() {
  return tagsText[Math.floor(Math.random() * tagsText.length)];
}

import React from "react";
import left from "../assets/arrow_left.svg";
import folder_icon from "../assets/folder_icon.svg";

const MyCollections = ({ item }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex">
        <img src={folder_icon} alt="folder icon" />
        <p className="text-xs m-1 capitalize">{item.title}</p>
      </div>
      <div>
        <img src={left} alt="left arrow" />
      </div>
    </div>
  );
};

export default MyCollections;

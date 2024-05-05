import React, { useState } from "react";
import MyCollections from "./MyCollections";
import down from "../assets/arrow_down.svg";
import left from "../assets/arrow_left.svg";
import folder_download from "../assets/folder_download.svg";
import { useSelector } from "react-redux";

const LeftMenu = ({ setShowPopup }) => {
  const [isOpen, setisOpen] = useState(true);
  const cardData = useSelector((state) => state.card);
  // const [collectionList, setCollectionList] = useState([]);

  return (
    <div className="p-4 text-left bg-white h-auto max-h-[300px] min-w-[240px] rounded-lg shadow-lg m-2 ">
      <div className="mb-6 flex items-center justify-between">
        <span className="text-sm font-medium ">My Collections</span>
        <button
          onClick={() => {
            setisOpen(!isOpen);
          }}
        >
          {isOpen ? (
            <img src={down} alt="down" />
          ) : (
            <img src={left} alt="left" />
          )}
        </button>
      </div>

      {isOpen && (
        <div>
          {cardData.map((item) => {
            return <MyCollections item={item} key={item.id} />;
          })}
        </div>
      )}
      <hr className="border-t border-customGray my-4" />
      <>
        <button
          className="flex items-center"
          onClick={() => {
            setShowPopup(true);
          }}
        >
          <img src={folder_download} alt="" />
          <p className="font-medium text-xs ml-1">New Collection</p>
        </button>
      </>
    </div>
  );
};

export default LeftMenu;

import React from "react";
import vector from "../assets/Vector.svg";
import Icon_Button from "../assets/Icon_Button.svg";
import download from "../assets/Icon_Map.svg";

const CollectionCard = ({ data, setDeleteModal }) => {
  return (
    <div className="bg-white  shadow-sm rounded-xl p-4 border border-customGray h-40 mr-4 mb-4 min-w-[300px]">
      <div className="upper-section flex justify-between items-center">
        <div className="text-[10px] font-medium">
          <button className="bg-bgGrayCustom p-2 rounded-lg flex items-center ">
            <p>Download Data</p>
            <img src={download} alt="download" className="pl-2" />
          </button>
        </div>
        <div className="text-xs flex items-center ">
          <p>87</p>
          <img src={vector} alt="delete" className="pl-1" />
          <button
            className="pl-3"
            onClick={() => {
              setDeleteModal({ id: data.id, status: true });
            }}
          >
            <img src={Icon_Button} alt="delete" />
          </button>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-md font-medium mb-2">{data.title}</h3>
        <p className="text-xs">{data.description}</p>
      </div>
    </div>
  );
};

export default CollectionCard;

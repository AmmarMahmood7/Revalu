import React from "react";

const NewCollectionCard = () => {
  return (
    <div className="bg-addNewCard w-[300px] shadow-sm rounded-xl p-4 border border-customGray h-40 flex items-center justify-center ">
      <div className="rounded-full w-16 h-16 bg-plusBg flex items-center justify-center">
        <p className="text-lg font-medium">+</p>
      </div>
    </div>
  );
};

export default NewCollectionCard;

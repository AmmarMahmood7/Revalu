import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addNewCard } from "../utils/cardSlice";
import { nanoid } from "nanoid";

const NewCollectionModal = ({ setShowPopup, setCollectionsData }) => {
  const dispatch = useDispatch();
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const [btnStatus, setBtnStatus] = useState(true);
  const [inputLength, setInputLength] = useState(0);
  const [textLength, setTextLength] = useState(0);

  const handleButtonClick = () => {
    dispatch(
      addNewCard({
        id: nanoid(),
        title: titleRef.current.value,
        description: descriptionRef.current.value,
      })
    );
    const handleChange = () => {};

    setShowPopup(false);
  };
  const handleChange = (e) => {
    const inputValue = titleRef.current.value;
    const textValue = descriptionRef.current.value;
    setInputLength(inputValue.length);
    setTextLength(textValue.length);

    setBtnStatus(!inputValue || !textValue);
  };
  return (
    <div className=" flex flex-col p-5 w-[400px] rounded-lg  bg-customBg shadow-xl border border-customGray z-50 ">
      <h3 className="text-lg font-medium  mb-2">New Collection</h3>
      <label htmlFor="title" className="text-[11px] font-medium mb-1">
        Collection Name<span className="text-red-500">*</span>
      </label>
      <input
        ref={titleRef}
        type="text"
        name="title"
        onChange={handleChange}
        maxLength={40}
        className="bg-white border border-customGray rounded-md h-10 p-2"
      />
      <small className="text-[10px] text-customText flex justify-end">
        {inputLength} / 40
      </small>
      <label htmlFor="description" className="text-[11px] font-medium mb-1">
        Description<span className="text-red-500">*</span>
      </label>

      <textarea
        ref={descriptionRef}
        type="text"
        onChange={handleChange}
        name="description"
        className="bg-white border border-customGray rounded-md p-2 h-20"
        maxLength={140}
      />

      <small className="text-[10px] text-customText flex justify-end mb-2">
        {textLength}/140
      </small>

      <div className="flex justify-end ">
        <button
          className=" font-medium py-2 px-4 mr-2  rounded-lg text-xs "
          onClick={() => {
            setShowPopup(false);
          }}
        >
          Close
        </button>
        <button
          disabled={btnStatus}
          className={`bg-bgGrayCustom font-medium py-2 px-4 border rounded-xl text-xs  ${
            btnStatus ? "text-disabledtext" : "text-bgBlue"
          }`}
          onClick={handleButtonClick}
        >
          Create Collection
        </button>
      </div>
    </div>
  );
};

export default NewCollectionModal;

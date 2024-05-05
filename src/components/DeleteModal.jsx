import React from "react";
import { DiVim } from "react-icons/di";
import { deleteCard } from "../utils/cardSlice";
import { useDispatch } from "react-redux";

const DeleteModal = ({ id, setDeleteModal }) => {
  const dispatch = useDispatch();

  const deleteCards = (id) => {
    dispatch(deleteCard(id));
  };
  return (
    <>
      <div className=" flex flex-col p-5 w-[400px] rounded-lg  bg-customBg shadow-2xl border border-customGray z-50 ">
        <h3 className="text-lg font-medium text-center">Delete Collection</h3>
        <p className="text-xs text-customText  text-center p-5">
          Are you sure you would like to delete this collection?You won't be
          able to undo this.
        </p>

        <div className="flex flex-col w-full ">
          <button
            className="font-medium py-2 px-4 mr-4 rounded-md text-xs bg-bgBlue text-white mb-4 w-full"
            onClick={() => {
              deleteCards(id);
              setDeleteModal((prev) => {
                return { ...prev, status: false };
              });
            }}
          >
            Delete
          </button>
          <button
            className="bg-white font-medium py-2 px-4 border rounded text-xs text-black border-none"
            onClick={() => {
              setDeleteModal((prev) => {
                return { ...prev, status: false };
              });
            }}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;

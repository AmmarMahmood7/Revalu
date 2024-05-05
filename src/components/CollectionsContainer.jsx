import React, { useEffect, useState } from "react";
import CollectionCard from "./CollectionCard";
import NewCollectionCard from "./NewCollectionCard";

import { useDispatch, useSelector } from "react-redux";
import { addNewCard } from "../utils/cardSlice";

const CollectionsContainer = ({ setShowPopup, setDeleteModal }) => {
  const cardData = useSelector((state) => state.card);

  const handleClick = () => {
    setShowPopup(true);
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(cardData));
  }, [cardData]);

  return (
    <>
      <div className="py-4 pl-2">
        <div className="flex flex-col w-[312px]">
          <h1 className="text-xl font-medium mb-7">My Collections</h1>
          <p className="text-xs ">
            Introducing collections: the ability to organise your materials,
            your way.{" "}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-xs text-center text-customText">
            Showing {cardData.length} Results
          </p>
          <hr className="border-t border-customGray my-4" />
          <div className="flex flex-wrap">
            <div className="flex flex-wrap flex-row">
              {cardData.map((data) => {
                return (
                  <CollectionCard
                    key={data.id}
                    data={data}
                    setDeleteModal={setDeleteModal}
                  />
                );
              })}
              <div>
                <button onClick={handleClick}>
                  <NewCollectionCard />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollectionsContainer;

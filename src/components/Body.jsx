import React, { useState } from "react";
import LeftMenu from "./LeftMenu";
import CollectionsContainer from "./CollectionsContainer";
import NewCollectionModal from "./NewCollectionModal";
import DeleteModal from "./DeleteModal";

const Body = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [deleteModal, setDeleteModal] = useState({ id: "", status: false });

  return (
    <div className="flex bg-customBg container pt-4 pl-2">
      <LeftMenu showPopup={showPopup} setShowPopup={setShowPopup} />
      <CollectionsContainer
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        setDeleteModal={setDeleteModal}
      />
      {/* popup */}
      {showPopup && (
        <div className=" fixed inset-0 flex items-center justify-center z-50">
          <NewCollectionModal
            setShowPopup={setShowPopup}
            // setCollectionsData={setCollectionsData}
          />
        </div>
      )}
      {/* delete modal */}
      {deleteModal.status && (
        <div className=" fixed inset-0 flex items-center justify-center z-50">
          <DeleteModal id={deleteModal.id} setDeleteModal={setDeleteModal} />
        </div>
      )}
    </div>
  );
};

export default Body;

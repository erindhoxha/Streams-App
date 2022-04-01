import React from "react";
import Header from "../Header";
import Modal from "../Modal";

const StreamDelete = () => {
  return (
    <div>
      StreamDelete
      <Modal
        title="Delete Stream"
        description="Are you sure you want to delete this stream?"
        primaryButtonText="Delete"
        secondaryButtonText="Close"
      />
    </div>
  );
};

export default StreamDelete;

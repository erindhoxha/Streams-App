import React from "react";
import Header from "../Header";
import Modal from "../Modal";

const StreamDelete = () => {
  const actions = (
    <div className="modal-footer">
      <button type="button" className="btn btn-create">
        Delete
      </button>
      <button type="button" className="btn btn-secondary" data-dismiss="modal">
        Close
      </button>
    </div>
  );

  return (
    <div>
      StreamDelete
      <Modal
        title="Delete Stream"
        description="Are you sure you want to delete this stream?"
        primaryButtonText="Delete"
        secondaryButtonText="Close"
        actions={actions}
      />
    </div>
  );
};

export default StreamDelete;

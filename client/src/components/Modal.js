import React from "react";
import ReactDOM from "react-dom";
import history from "../history";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div
      onClick={() => history.push("/")}
      className="modal d-block fade show"
      tabindex="-1"
      role="dialog"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="modal-dialog"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Delete stream</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to delete this stream?.</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-create">
              Delete
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;

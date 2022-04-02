import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div
      onClick={props.onDismiss}
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
            <h5 className="modal-title">{props.title}</h5>
            <button
              onClick={props.onDismiss}
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>{props.description}</p>
          </div>
          {props.actions}
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;

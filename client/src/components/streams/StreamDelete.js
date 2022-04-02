import React from "react";
import Header from "../Header";
import Modal from "../Modal";
import history from "../../history";
import { connect } from "react-redux";
import { FetchStream } from "../../actions";

class StreamDelete extends React.Component {
  componentDidMount() {
    console.log("THESE ARE THE PROPS OF STREAMDELETE", this.props);
    this.props.FetchStream(this.props.match.params.id);
    console.log(this.props.stream);
  }
  renderActions() {
    return (
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
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    }

    return `Are you sure you want to delete this stream with title ${this.props.stream.title}?`;
  }

  render() {
    return (
      <Modal
        title={"Delete Stream"}
        description={this.renderContent()}
        primaryButtonText="Delete"
        secondaryButtonText="Close"
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // This will be converted from STATE to PROPS
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { FetchStream })(StreamDelete);

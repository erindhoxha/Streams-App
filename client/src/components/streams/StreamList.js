import React, { useEffect } from "react";
import { connect } from "react-redux";
import { FetchStreams, EditStream, DeleteStream } from "../../actions";
import streams from "../../api/streams";
import { Link } from "react-router-dom";
import history from "../../history";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.FetchStreams();
  }
  deleteEntry(entry) {
    this.props.DeleteStream(entry);
  }
  editEntry(id) {
    history.push("/stream/edit/" + id);
  }

  renderAdmin(stream) {
    if (stream.userId == this.props.currentUserId) {
      return (
        <div className="float-right">
          <Link
            to={"/stream/delete/" + stream.id}
            className="delete-btn btn mr-2"
          >
            Delete
          </Link>
          {/* <button
            onClick={() => this.deleteEntry(stream.id)}
            className="btn delete-btn mr-2"
          >
            Delete
          </button> */}
          <Link to={"/stream/edit/" + stream.id} className="edit-btn btn">
            Edit
          </Link>
        </div>
      );
    }
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div className="text-right">
          <Link
            to="/stream/new"
            className="btn btn-create mt-4 ml-auto text-right"
          >
            Create stream
          </Link>
        </div>
      );
    }
  }

  renderList() {
    return this.props.streams.map((stream) => {
      return (
        <div className="list-group-item list-group-item-action" key={stream.id}>
          <div className="d-flex w-100 justify-content-between">
            <Link to={`/stream/${stream.id}`} className="mb-1">
              {stream.title}
            </Link>
            <small className="text-muted">3 days ago</small>
          </div>
          <p className="mb-1">{stream.description}</p>
          <small className="text-muted">Donec id elit non mi porta.</small>
          {this.renderAdmin(stream)}
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2 className="mb-3 h2-heading">Streams</h2>
        <div className="list-group">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.id,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, {
  FetchStreams,
  EditStream,
  DeleteStream,
})(StreamList);

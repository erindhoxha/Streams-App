import React from "react";
import Header from "../Header";
import { connect } from "react-redux";
import { FetchStream } from "../../actions";
import flv from "flv.js";
import { ReactFlvPlayer } from "react-flv-player";

class StreamShow extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.FetchStream(this.props.match.params.id);
  }

  render() {
    if (!this.props.stream) {
      return (
        <div>
          <Header minified="true" />
          Loading...
        </div>
      );
    }
    return (
      <div>
        <Header minified="true" />
        <div className="container mt-4">
          <ReactFlvPlayer
            url={`http://localhost:8000/live/STREAM_NAME${this.props.match.params.id}.flv`}
            heigh="800px"
            width="800px"
            isMuted={true}
          />
          <h4>{this.props.stream.title}</h4>
          <p>{this.props.stream.description}</p>
          <video></video>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { FetchStream })(StreamShow);

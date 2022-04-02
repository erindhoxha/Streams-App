import React from "react";
import Header from "../Header";
import { connect } from "react-redux";
import { FetchStream } from "../../actions";

class StreamShow extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.FetchStream(this.props.match.params.id);
    console.log("THESE ARE THE PROPS", this.props);
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

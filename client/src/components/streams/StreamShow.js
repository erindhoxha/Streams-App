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
    return (
      <div>
        <Header minified="true" />
        StreamShow
        {this.props.stream ? "Hello" : ""}
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

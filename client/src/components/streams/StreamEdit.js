import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import {
  FetchStreams,
  EditStream,
  DeleteStream,
  FetchStream,
} from "../../actions";
import Header from "../Header";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.FetchStream(this.props.match.params.id);
    console.log("Props are here!", this.props);
    console.log("ID is here", this.props.match.params.id);
  }

  renderStream(id) {
    return <div></div>;
  }

  onSubmit = (formValues) => {
    console.log(formValues);
    this.props.EditStream(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Header minified={true} />
        <div className="container mt-5">
          Edit stream
          <div>
            <StreamForm
              initialValues={_.pick(this.props.stream, "title", "description")}
              onSubmit={this.onSubmit}
            />
            {console.log(
              "Props are here!",
              _.pick(this.props.stream, "title", "description")
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  console.log(ownProps);
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, {
  EditStream,
  FetchStream,
})(StreamEdit);

import React, { useState } from "react";
import { Router, Route } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import "../style/global.css";
import FirstPage from "./MainPage";
import history from "../history";

const PageTwo = () => {
  return <div>PageTwo</div>;
};

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Route path="/" exact component={FirstPage} />
        <Route path="/stream/new" exact component={StreamCreate} />
        <Route path="/stream/edit/:id" exact component={StreamEdit} />
        <Route path="/stream/delete" exact component={StreamDelete} />
        <Route path="/stream/show" exact component={StreamShow} />
      </Router>
    </div>
  );
};
export default App;

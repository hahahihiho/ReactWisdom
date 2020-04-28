import React, { Component } from "react";
import Subject from "./component/Subject";
import Content from "./component/Content";
import List from "./component/List";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="WEB" content="World Wide WEB" />
        <Subject title="WEB2" content="World Wide WEB2" />
        <List />
        <Content title="HTML" content="HTML is HyperText Markup Language" />
        <Content title="HTML2" content="HTML2 is HyperText Markup Language" />
      </div>
    );
  }
}

export default App;

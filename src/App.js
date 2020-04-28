import React, { Component } from "react";
import Subject from "./component/Subject";
import Content from "./component/Content";
import List from "./component/List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: { title: "WEB", sub: "world wide web" },
      list: [
        { id: 1, title: "HTML", content: "HTML is hypertext markup language" },
        { id: 2, title: "CSS", content: "CSS is for design" },
        { id: 3, title: "JavaScript", content: "JavaScript is good" },
      ],
      hello: "안녕",
    };
  }
  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          content={this.state.subject.sub}
        />
        <List data={this.state.list} />
        <Content title={this.state.hello} content="Nothing" />
        <Content title="HTML2" content="HTML2 is HyperText Markup Language" />
      </div>
    );
  }
}

export default App;

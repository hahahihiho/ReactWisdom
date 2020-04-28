import React, { Component } from "react";

class Subject extends Component {
  render() {
    return (
      <div className="Subject">
        <header>
          <h1>{this.props.title}</h1>
          {this.props.content}
        </header>
      </div>
    );
  }
}

export default Subject;

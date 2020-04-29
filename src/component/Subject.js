import React, { Component } from 'react';

class Subject extends Component {
  render() {
    return (
      <div className="Subject">
        <header>
          <h1>
            <a href="안돼 돌아가">{this.props.title}</a>
          </h1>
          {this.props.content}
        </header>
      </div>
    );
  }
}

export default Subject;

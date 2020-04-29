import React, { Component } from 'react';
import Subject from './component/Subject';
import Content from './component/Content';
import List from './component/List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: { title: 'WEB', sub: 'world wide web' },
      list: [
        { id: 1, title: 'HTML', content: 'HTML is hypertext markup language' },
        { id: 2, title: 'CSS', content: 'CSS is for design' },
        { id: 3, title: 'JavaScript', content: 'JavaScript is good' },
      ],
      content_id: 1,
    };
    this.click_content = function (e) {
      let id = e.target.id;
      e.preventDefault();
      this.setState({ content_id: id });
    };
  }
  render() {
    let i = this.state.content_id - 1;
    let title_from_list = this.state.list[i].title;
    let content_from_list = this.state.list[i].content;
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          content={this.state.subject.sub}
        />
        <List data={this.state.list} onclick={this.click_content.bind(this)} />
        <Content title={title_from_list} content={content_from_list} />
      </div>
    );
  }
}

export default App;

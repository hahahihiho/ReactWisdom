import React, { Component } from 'react';
import Subject from './component/Subject';
import Content from './component/Content';
import List from './component/List';
import NavCRUD from './component/NavCRUD';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'read',
      subject: { title: 'WEB', sub: 'world wide web' },
      list: [
        { id: 1, title: 'HTML', content: 'HTML is hypertext markup language' },
        { id: 2, title: 'CSS', content: 'CSS is for design' },
        { id: 3, title: 'JavaScript', content: 'JavaScript is good' },
      ],
      content_id: 1,
    };
  }
  click_content = function (e) {
    let id = e.target.id;
    e.preventDefault();
    this.setState({
      mode: 'read',
      content_id: id,
    });
  };

  click_crud = function (mode) {
    this.setState({
      mode: mode,
    });
  };
  mode_change = function (mode, i) {
    let title_from_list, content_from_list;
    if (mode == 'read') {
      title_from_list = this.state.list[i].title;
      content_from_list = this.state.list[i].content;
    } else if (mode == 'create') {
      title_from_list = 'create';
      content_from_list = 'create_content';
    } else if (mode == 'update') {
      title_from_list = 'update';
      content_from_list = 'create_content';
    } else if (mode == 'delete') {
      title_from_list = 'delete';
      content_from_list = 'create_content';
    }
    return [title_from_list, content_from_list];
  };
  render() {
    let i = this.state.content_id - 1;
    let mode = this.state.mode;
    let title_from_list = this.state.list[i].title;
    let content_from_list = this.state.list[i].content;
    [title_from_list, content_from_list] = this.mode_change(mode, i);
    return (
      <div className="App">
        <NavCRUD click_crud={this.click_crud.bind(this)}></NavCRUD>
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

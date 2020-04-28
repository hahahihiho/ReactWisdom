import React, { Component } from 'react';

class List extends Component {
  render() {
    let list_data = [];
    let data = this.props.data;
    for (let i = 0; i < data.length; i++) {
      list_data.push(
        <li key={data[i].id}>
          <a href={'html.' + data[i].id}>{data[i].title}</a>
        </li>,
      );
    }
    return <ul>{list_data}</ul>;
  }
}
export default List;

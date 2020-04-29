import React, { Component } from 'react';

class List extends Component {
  render() {
    let list_data = [];
    let data = this.props.data;
    let onclick = this.props.onclick;
    for (let i = 0; i < data.length; i++) {
      list_data.push(
        <li key={data[i].id}>
          <a id={data[i].id} href={'html.' + data[i].id} onClick={onclick}>
            {data[i].title}
          </a>
        </li>,
      );
    }
    return <ul>{list_data}</ul>;
  }
}
export default List;

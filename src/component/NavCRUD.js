import React from 'react';

class NavCRUD extends React.Component {
  render() {
    let CUD = ['create', 'update', 'delete'];
    let click_crud = this.props.click_crud;
    let CUD_return = [];
    for (let i = 0; i < CUD.length; i++) {
      CUD_return.push(
        <div key={CUD[i]}>
          <a
            href={CUD[i]}
            onClick={function (e) {
              e.preventDefault();
              click_crud(CUD[i]);
            }}
          >
            {CUD[i]}
          </a>
        </div>,
      );
    }
    return <div className="NavCRUD">{CUD_return}</div>;
  }
}
export default NavCRUD;

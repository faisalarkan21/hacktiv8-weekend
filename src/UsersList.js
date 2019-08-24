import { Button } from "antd";
import React from "react";

class UserList extends React.Component {
  render() {
    return (
      <div>
        {this.props.users.map(v => {
          return <li>{v.name}</li>;
        })}
      </div>
    );
  }
}

export { UserList };

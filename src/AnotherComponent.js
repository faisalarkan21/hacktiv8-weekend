import { Button } from "antd";
import React from "react";
import { UserList } from "./UsersList";

class AnotherComponent extends React.Component {
  render() {
    console.log('this.props', this.props)
    return (
      <div style={{backgroundColor: 'red'}}>
        <Button
          onClick={this.props.handleIncrementNumber}
          className="coba"
          type="primary"
        >
          Tambah
        </Button>
        <Button
          onClick={this.props.handleIncrementNumber}
          className="coba"
          type="primary"
        >
          Kurang
        </Button>
        {this.props.number}
        <Button onClick={this.props.handleFetchUsers} type="primary">
          Fetch Users
        </Button>
        <UserList users={this.props.users} />
      </div>
    );
  }
}

export { AnotherComponent };

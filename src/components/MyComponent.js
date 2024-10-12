// class component
// function component

import React from "react";

import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";
class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Hoi dan IT", age: "30" },
      { id: 2, name: "IT", age: "26" },
      { id: 3, name: "Lien", age: "17" },
    ],
  };

  handleAddNewUser = (userObj) => {
    this.setState({
      listUsers: [userObj, ...this.state.listUsers],

      // listUsers: [...this.state.listUsers, userObj],
    });
  };

  handleDeleteUser = (userId) => {
    //let listUsersClone = [...this.state.listUsers]
    let listUsersClone = this.state.listUsers;
    listUsersClone = listUsersClone.filter((item) => item.id !== userId);
    this.setState({
      listUsers: listUsersClone,
    });
  };
  //JSX
  render() {
    //DRY: dont't requet youself

    const test = { name: "Lien", age: 18 };
    return (
      <>
        <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
        <br /> <br />
        <DisplayInfor listUsers={this.state.listUsers} 
          handleDeleteUser = {this.handleDeleteUser}
        />

      </>
    );
  }
}

export default MyComponent;

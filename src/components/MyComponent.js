// class component
// function component

import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
  //JSX
  render() {
    const myInfor = ["a", "b", "c"];
    return (
      <div>
        <UserInfor />
        <br /> <br />
        <DisplayInfor name={"Lien"} age={23} myInfor={myInfor} />
      </div>
    );
  }
}

export default MyComponent;

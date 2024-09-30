// class component
// function component

import React from "react";
class MyComponent extends React.Component {
  // JSX
  state = {
    name: "Lien",
    address: "Thanh Hoa",
    age: 23,
  };

  //JSX
  render() {
    return <div>my name is {this.state.name}</div>;
  }
}

export default MyComponent;

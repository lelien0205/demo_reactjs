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

  handleClick = (event) => {
    console.log(">> click me my button");
    //console.log("My name is", this.state.name);
    // console.log("random", Math.floor(Math.random() * 100));

    // merge state => react class
    this.setState({
      name: "LeLien",
      age: Math.floor(Math.random() * 100),
    });

    // this.setState({
    //   age:  Math.floor(Math.random() * 100);
    // })
  };

  handleOnMoverOver(event) {
    console.log(event);
  }

  //JSX
  render() {
    return (
      <div>
        my name is {this.state.name} and {this.state.age}
        {/* <button onClick={this.handleClick}>Click me</button> */}
        <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          Click me
        </button>
        <button onMouseOver={this.handleOnMoverOver}> Hover me</button>
      </div>
    );
  }
}

export default MyComponent;

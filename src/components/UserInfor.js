import React from "react";

class UserInfor extends React.Component {
  state = {
    name: "Lien",
    address: "Thanh Hoa",
    age: 23,
  };

  hanleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  hanleOnChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault(); // ngan load lai trang
    console.log(this.state);
  };
  render() {
    return (
      <div>
        my name is {this.state.name} and {this.state.age}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label htmlFor="">Your name: </label>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.hanleOnChangeInput(event)}
          />
          <label htmlFor="">Your age: </label>
          <input
            value={this.state.age}
            type="text"
            onChange={(event) => this.hanleOnChangeAge(event)}
          />

          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default UserInfor;

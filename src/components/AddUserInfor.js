import React from "react";

class AddUserInfor extends React.Component {
  state = {
    name: "",
    address: "",
    age: "",
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

    this.props.handleAddNewUser({
      id: Math.floor(Math.random * 100 + 1) + " random",
      name: this.state.name,
      age: this.state.age,
    });
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
export default AddUserInfor;

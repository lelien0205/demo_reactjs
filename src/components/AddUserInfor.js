import React, { useState } from "react";

// class AddUserInfor extends React.Component {
//   state = {
//     name: "",
//     address: "",
//     age: "",
//   };

//   hanleOnChangeInput = (event) => {
//     this.setState({
//       name: event.target.value,
//     });
//   };

//   hanleOnChangeAge = (event) => {
//     this.setState({
//       age: event.target.value,
//     });
//   };

//   handleOnSubmit = (event) => {
//     event.preventDefault(); // ngan load lai trang

//     this.props.handleAddNewUser({
//       id: Math.floor(Math.random * 100 + 1) + " random",
//       name: this.state.name,
//       age: this.state.age,
//     });
//   };
//   render() {
//     return (
//       <div>
//         my name is {this.state.name} and {this.state.age}
//         <form onSubmit={(event) => this.handleOnSubmit(event)}>
//           <label htmlFor="">Your name: </label>
//           <input
//             value={this.state.name}
//             type="text"
//             onChange={(event) => this.hanleOnChangeInput(event)}
//           />
//           <label htmlFor="">Your age: </label>
//           <input
//             value={this.state.age}
//             type="text"
//             onChange={(event) => this.hanleOnChangeAge(event)}
//           />

//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

const AddUserInfor = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");

  const hanleOnChangeInput = (event) => {
    // this.setState({
    //   name: event.target.value,
    // });

    setName(event.target.value);
  };

  const hanleOnChangeAge = (event) => {
    // this.setState({
    //   age: event.target.value,
    // });

    setAge(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault(); // ngan load lai trang

    props.handleAddNewUser({
      id: Math.floor(Math.random * 100 + 1) + " random",
      name: name,
      age: age,
    });
  };
  return (
    <div>
      my name is {name} and {age}
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <label htmlFor="">Your name: </label>
        <input
          value={name}
          type="text"
          onChange={(event) => hanleOnChangeInput(event)}
        />
        <label htmlFor="">Your age: </label>
        <input
          value={age}
          type="text"
          onChange={(event) => hanleOnChangeAge(event)}
        />

        <button>Submit</button>
      </form>
    </div>
  );
};
export default AddUserInfor;

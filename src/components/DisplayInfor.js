import React, { useState } from "react";
import "./DisplayInfor.scss";
// import logo from "./../logo.svg";

// class DisplayInfor extends React.Component {
//   render() {
//     //destructuring array/object
//     console.log(">> call me render: ");
//     const { listUsers } = this.props; //object

//     //props => viet tat properties
//     return (
//       <div className="display-infor-container">
//         {/* <img src={logo} alt="" /> */}

//         {true && (
//           <div>
//             {listUsers.map((user, index) => {
//               return (
//                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                   <div>
//                     <div>my name's {user.name}</div>
//                     <div>my age's {user.age}</div>
//                   </div>
//                   <div>
//                     <button
//                       onClick={() => this.props.handleDeleteUser(user.id)}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                   <hr />
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     );
//   }
// }

const DisplayInfor = (props) => {
  const { listUsers } = props;

  const [isShowHideListUser, setShowHideListUser] = useState(true);

  // Destructuring assigment

  const handleShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser);
  };
  return (
    <div className="display-infor-container">
      {/* <img src={logo} alt="" /> */}

      <div>
        <span onClick={() => handleShowHideListUser()}>
          {isShowHideListUser === true ? "Hide list users" : "Show List users"}
        </span>
      </div>
      {isShowHideListUser && (
        <>
          {listUsers.map((user, index) => {
            return (
              <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                <div>
                  <div>my name's {user.name}</div>
                  <div>my age's {user.age}</div>
                </div>
                <div>
                  <button onClick={() => props.handleDeleteUser(user.id)}>
                    Delete
                  </button>
                </div>
                <hr />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default DisplayInfor;

// import React from "react";
// import "./LogOrSigninContainer.css";
// import Register from "./" ;
// import Login from "./" ;
// import Logout from "./";
// import Message from "./";

// const LogOrSigninContainer = () => {
//   return (
//     <div className="LogSignContainer-Wrapper">
//       <Register user = {user} setUser ={setUser} />
//       <Login user = {user} setUser = {setUser} />
//       <Logout />
//       <Message message = {message} setMessage = {setMessage} />

//     </div>
//   )
// }
// export default LogOrSigninContainer;

const testLogContainer = () => {
  return (
    <div className="LogOrSign-Wrapper">
    <div className="RegisterDesignTest">
      <h3>Register New</h3>
      <p> Username</p>
      <input></input>
      <p> Email</p>
      <input></input>
      <p>Password</p>
      <input></input>
    </div>
    <div className="LoginDesignTest">
      <h3>Login Existing User</h3>
      <p> Username</p>
      <input></input>
      <p>Password</p>
      <input></input>
  </div>
  <div className="LogoutDesignTest">
      <h3>Logout below</h3>
      <button>Logout</button>
  </div>
  <div className="MessageDesignTest">
      <h3>Message</h3>
      <p>User activity message goes here</p>
      <button>Logout</button>
  </div>

  </div>
  )
}

export default testLogContainer

{/* <div className='LogOrSigninContainer'>
      <div className='registerBox'>
        <p className='promptText'>username</p>
        <input></input>
        <p className='promptText'>email</p>
        <input></input>
        <p className='promptText'>password</p>
        <input></input>
        <button type='submit'>Register User</button>

      </div>
      <div className='loginBox'>
        <p className='promptText'>username</p>
        <input></input>
        <p className='promptText'>password</p>
        <input></input>
        <button type='submit'>Login</button>

      </div>
      <div className='logoutBox'>
        <button>logout</button>

      </div>
      <div className='messageBox'>
        <h3>Message area</h3>
        <p>placeholder text: X has logged in/out</p>

      </div>
    </div> */}
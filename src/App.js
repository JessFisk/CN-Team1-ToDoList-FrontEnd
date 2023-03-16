import './App.css';
import React, {useState, useEffect} from 'react';


// import {authCheck} from "./utils/user";
// import {getTokenFromCookie} from "./common";

import HeaderTitle from "./components/header/Header"
import Footer from "./components/footer/Footer"
// import Footer;
// import ToDoContainer;
// import LogOrSignContainer;
// import MessageContainer;




function App() {

  //add all the global states back in

  //!!!useEffect is correct
  // useEffect(() =>{
  //   if (document.cookie){
  //     let token = getTokenFromCookie("jwt");
    
  //   if (token ===false) {
  //     setuser(null);
  //   } else {
  //     loginWithToken(token)
  //   }
  //   } 
  // }, []);

  // const loginWithToken = async (token) => {
  //}
  //!!! add the function

  return (
    //completely overhaul to use components not divs
    //NB to self: some might be on other branch?
  <div className='App-wrapper'>

    <div className='login-display'>
      {/* <p>{user.username} is logged in</p> */}
    </div>

    <HeaderTitle/>

    <div className='LogOrSigninContainer'>
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
    </div>
    
    <div className='ToDoContainer'>
      <div className='ActiveToDo'>
        <h3 id='ActiveToDoHeader'>Active To-Do List</h3> 
      </div>

    <div className='DoneToDo'>
        <h3 id='DoneToDoHeader'>Done To-Do List </h3>
        <ul></ul>
        {/* <span onClick={(event) => handleDeleteTodo(event, _id)}>X</span> */}
    </div>

    <div className='TextArea'>
      <h3 id='InputHeader'>Type new task here</h3>
      {/* <input>user will type task here</input> */}
      <button type='submit'>Add new task</button>
    </div>
  </div>
  
  
  <Footer/>
    
  </div>
  );
}

export default App;

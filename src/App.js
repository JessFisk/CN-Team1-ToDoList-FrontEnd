import './App.css';
import React, { useState, useEffect } from 'react';


// import {authCheck} from "./utils/user";
// import {getTokenFromCookie} from "./common";

import HeaderTitle from "./components/header/Header"
import Footer from "./components/footer/Footer"
import TodoContainer from "./components/ToDoContainer/ToDoContainer"
import DoneTodoContainer from "./components/DonetodoListsContainer/doneTodoListContainer"
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

      <HeaderTitle />

      <div className='LogOrSigninContainer'>

        <div className='messageBox'>

          <h2>Welcome X lets get some todo's done</h2>
        </div>

        <div id="inputBoxesArea">
          <div className='registerBox'>
            <div className="inputContainers">
              <p className='promptText'>Username</p>
              < input></input>
            </div>
            <div className="inputContainers">
              <p className='promptText'>Email</p>
              <input></input>
            </div>
            <div className="inputContainers">
              <p className='promptText'>Password</p>
              <input></input>
            </div>
            <button type='submit'>Register User</button>
          </div>


          <div className='loginBox'>
            <div className="inputContainers">
              <p className='promptText'>Username</p>
              <input></input>
            </div>
            <div className="inputContainers">
              <p className='promptText'>Password</p>
              <input></input>
            </div>
            <button type='submit'>Login</button>
          </div>

        </div>
      </div>

      <div className="ToDoContainers">
        <div className='ActiveToDo'>
          <TodoContainer />
        </div>

        <div className='DoneToDo'>
          <DoneTodoContainer />
        </div>
      </div>

      {/* <ul></ul>
{/* <span onClick={(event) => handleDeleteTodo(event, _id)}>X</span> */}

      <div className='logoutBox'>
        <button>logout</button>
      </div>
      <Footer />

    </div>
  );
}

export default App;

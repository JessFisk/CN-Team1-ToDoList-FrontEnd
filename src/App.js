import './App.css';

import React, { useState, useEffect } from 'react';


import HeaderTitle from "./components/header/Header"
import Footer from "./components/footer/Footer"
import TodoContainer from "./components/ToDoContainer/ToDoContainer"
import DoneTodoContainer from "./components/DonetodoListsContainer/doneTodoListContainer"
// import LogOrSignContainer;
// import MessageContainer;



// import {authCheck} from "./utils/user"; <--not written yet
// import {getTokenFromCookie} from "./common"; <-- not written yet


import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ToDoContainer from "./components/ToDoContainer/ToDoContainer";
import LogOrSignContainer from "./components/logOrSign/logOrSignContainer/LogOrSignContainer";
import MessageContainer from "./components/messageContainer/MessageContainer";

function App() {


  //add all the global states back in

  // const user = [user, setUser] = useState(null);
  // const activeTodos = [activeTodos, setActiveTodos] = useState([]);
  // const doneTodos = [doneTodos, setDoneTodos] = useState([]);
  // const message = [message, setMessage] = useState("everthing is awesome");
  //!!! not defined or used yet!!!


  //!!! not defined or used yet!!!
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
  //!!! add the function !!!
  //}

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

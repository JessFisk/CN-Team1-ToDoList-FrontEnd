import './App.css';
import React, {useState, useEffect} from 'react';
// import {authCheck} from "./src/utils";
import {getTokenFromCookie} from "./src/utils";

import HeaderTitle from './src/components/header/Header';

function App() {
  const [user, setuser] = useState({
    username: null,
    email: null,
    password: null,
  });
  const [users, setusers] = useState();

  const [ActiveToDo, setActiveToDo] = useState();

  useEffect(() =>{
    if (document.cookie){
      let token = getTokenFromCookie("jwt");
    
    if (token ===false) {
      setuser({
        username: null,
        email: null,
        password: null,
      });
    } else {
      loginWithToken(token)
    }
    } 
  }, []);

  const loginWithToken = async (token) => {
    const persistentUser = await authCheck(token);
    await setUser(persistentUser.user)
  }

  const logOut = (e) => {
    e.preventdefault()
    setUser({
      username: null,
      email: null,
      token: null,
    });
    setusers(null);
    // document.cookie = "jwt_token=;" double check the code for this
  };

  const submitHandler = async (e) => {
    e.preventdefault();
    const cookieName = "jwt_token";
    setusers(await getAllUsers) //check - do we need multiple submitHandlers?
  }
  return (
  <div className='App-wrapper'>

    <div className='login-display'>
      <p>{user.username} is logged in</p>
    </div>

    <div HeaderTitle></div>

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
        <span onClick={(event) => handleDeleteTodo(event, _id)}>X</span>
    </div>

    <div className='TextArea'>
      <h3 id='InputHeader'>Type new task here</h3>
      <input>user will type task here</input>
      <button type='submit'>Add new task</button>
    </div>
  </div>
  
  <div className='Footer'>
  <h1> Sweet Footer</h1>
  </div>  
    
    
  </div>
  );
}

export default App;

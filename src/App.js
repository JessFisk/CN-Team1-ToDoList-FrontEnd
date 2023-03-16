import './App.css';
import {useState, useEffect} from 'react';
// import {authCheck} from "./utils/user";
// import {getTokenFromCookie} from "./common";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ToDoContrainer from "./components/ToDoContainer/ToDoContainer";
import LogOrSignContainer from "./components/ToDoContainer/ToDoContainer";
import MessageContainer from "./components/messageContainer/MessageContainer";

function App() {
  //add all the global states back in

  const user = [user, setUser] = useState(null);
  const activeTodos = [activeTodos, setActiveTodos] = useState([]);
  const doneTodos = [doneTodos, setDoneTodos] = useState([]);
  const message = [message, setMessage] = useState("everthing is awesome");

  //!!!useEffect is correct
  useEffect(() =>{
    if (document.cookie){
      let token = getTokenFromCookie("jwt");
    
    if (token ===false) {
      setuser(null);
    } else {
      loginWithToken(token)
    }
    } 
  }, []);

  // const loginWithToken = async (token) => {
  //}
  //!!! add the function

  return (
    //completely overhaul to use components not divs
    //NB to self: some might be on other branch?
  <div className='App-wrapper'>

    <div className='login-display'>
      <p>{user.username} is logged in</p>
    </div>

    <div Header></div>

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
  
  <div className='Footer'>
  <h1> Sweet Footer</h1>
  </div>  
    
    
  </div>
  );
}

export default App;

import './App.css';
import {useState, useEffect} from 'react';
// import {authCheck} from "./utils/user"; <--not written yet
// import {getTokenFromCookie} from "./common"; <-- not written yet

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ToDoContainer from "./components/ToDoContainer/ToDoContainer";
import LogOrSignContainer from "./components/logOrSign/logOrSignContainer/LogOrSignContainer";
import MessageContainer from "./components/messageContainer/MessageContainer";

function App() {
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
    <>
      <Header/>
      {/* ^user = {user} */}
      <div className='User-Ops-Wrapper'>
        <LogOrSignContainer 
        // user = {user} setUser = {setUser}
        // setActiveTodos = {setActiveTodos}
        // setDoneTodos = {setDoneTodos}
        />
        <MessageContainer 
        // message={message} 
        />
      </div>

      <div className='Todo-Wrapper'>
        <ToDoContainer
        // activeTodos = {activeTodos} setActiveTodos = {setActiveTodos}
        // doneTodos = {doneTodos} setDoneTodos = {setDoneTodos}
        // user = {user}
        // message = {message} setMessage = {setMessage}
        />
      </div>
      <Footer />
    </>
  )
  }

export default App;

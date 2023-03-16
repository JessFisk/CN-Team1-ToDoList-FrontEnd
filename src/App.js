import './App.css';
import {useState, useEffect} from 'react';
// import {authCheck} from "./utils/user";
// import {getTokenFromCookie} from "./common";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ToDoContainer from "./components/ToDoContainer/ToDoContainer";
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
    <>
      <Header user = {user}/>
      <div className='User-Ops-Wrapper'>
        <LogOrSignContainer 
        //user, setuser, setactive and setdone states
        />
        <MessageContainer message={message} />
      </div>

      <div className='Todo-Wrapper'>
        <ToDoContainer
        //activeTodos, setActiveTodos, doneTodos, setDoneTodos, user, message, setMessage states
        />
      </div>
      <Footer />
    </>
  )
  }

export default App;

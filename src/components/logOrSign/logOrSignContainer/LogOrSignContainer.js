import React from "react";
import "./LogOrSigninContainer.css";
import Log from "../log/Log" ;
import Logout from "../logOut/LogOut";

const LogOrSigninContainer = ({
  user,
  setUser,
  setActiveTodos,
  setDoneTodos,
  message,
  setMessage,
}) => {
  console.log("logorsign setactivetodos: ", setActiveTodos)

  return (
    <>
      <h1>Log in</h1>
      <Log user = {user} setUser ={setUser}
      setActiveTodos = {setActiveTodos} setDoneTodos ={setDoneTodos}
      />
      <h1>Sign in</h1>
      <Sign user = {user} setUser ={setUser} />
      <h1>Log Out</h1>
      <Logout setUser = {setUser}
      setActiveTodos = {setActiveTodos}
      setDoneTodos = {setDoneTodos}
      />
    </>
  )
  }

export default LogOrSigninContainer;



  
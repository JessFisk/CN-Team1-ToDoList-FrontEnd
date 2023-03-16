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
      <Log user = {user} setUser ={setUser}
      setActiveTodos = {setActiveTodos} setDoneTodos ={setDoneTodos}
      />
      <Sign user = {user} setUser ={setUser} />
      <Logout setUser = {setUser}
      setActiveTodos = {setActiveTodos}
      setDoneTodos = {setDoneTodos}
      />
    </>
  )
  }

export default LogOrSigninContainer;



  
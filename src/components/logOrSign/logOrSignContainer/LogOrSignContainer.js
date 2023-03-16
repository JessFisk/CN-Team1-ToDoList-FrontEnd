import React from "react";
import "./LogOrSigninContainer.css";
import Log from "../log/Log" ;
import Logout from "../logOut/LogOut";

const LogOrSigninContainer = () => {
  return (
    <div className="LogSignContainer-Wrapper">
      <Register user = {user} setUser ={setUser} />
      <Log user = {user} setUser = {setUser} />
      <Logout />
      <Message message = {message} setMessage = {setMessage} />

    </div>
  )
}
export default LogOrSigninContainer;



  
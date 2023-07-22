import React from "react";

import { useNavigate } from "react-router-dom";



const LogOut = () => {
    localStorage.removeItem('token');
    //setLogin(false)
    useNavigate("/login")
}
  export default LogOut;
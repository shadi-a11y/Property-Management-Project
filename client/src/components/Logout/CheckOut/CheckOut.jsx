import React from 'react';
import './CheckOut.css';
import { Link } from 'react-router-dom';
import { useCookies } from "react-cookie";

const CheckOut = () => {

  const [cookies, setCookies] = useCookies(["access_token"]);


  const handleLogout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    console.log("Logout successful!");
  }

  return (
    <div className='CheckOut'>
      <div id='header'>
        <h2>Are you sure you want to logout?</h2>
      </div>
      <div id='footer'>
        <button className='btnn' >
        <Link id='btn-content' onClick={handleLogout} to="/" >Yes</Link>
        </button>
        <button className='btnn'>
          <Link id='btn-content' to="/home">No</Link>
        </button>
      </div>
    </div>
  )
}

export default CheckOut
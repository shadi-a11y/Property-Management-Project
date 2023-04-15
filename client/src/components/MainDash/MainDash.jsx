import React from 'react'
import './MainDash.css'
import { Route, Routes } from "react-router-dom";
import Dashboard from '../Dashboard/Dashboard'
import Properties from '../Properties/Properties'
import Agents from '../Agents/Agents'
import MyProfile from '../My Profile/MyProfile'
import Logout from '../Logout/Logout'


const MainDash = ({ onLogout}) => {
  return (
    <div className='MainDash'>
      <Routes>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/properties" element={<Properties/>}/>
      <Route path="/agents" element={<Agents/>}/>
      <Route path="/myprofile" element={<MyProfile/>}/>
      <Route path="/logout" element={<Logout/>} onLogout/>
      </Routes>
    </div>
  )
}

export default MainDash
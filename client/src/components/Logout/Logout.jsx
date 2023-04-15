import React from 'react'
import './Logout.css'
import CheckOut from './CheckOut/CheckOut';

const Logout = ({onLogout}) => {
  return (
    <div className="Logout">
              <div className="overlay"></div>
              <div className="modal-content">
                <CheckOut onLogout/>
              </div>
            </div>
  )
}

export default Logout
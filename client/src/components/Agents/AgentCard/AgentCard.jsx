import React from 'react'
import './AgentCard.css'

const AgentCard = (props) => {

  const handleEmailClick = () => {
    window.location.href = `mailto:${props.email}`;
  }

  return (
        <div className="AgentCard">
          <img src={props.avatar} alt='!!!!'/>
          <div className="card-content">
            <div className="title-value">
            <span>{props.name}</span>
            <span className='value' onClick={handleEmailClick}>{props.email}</span>
            </div>
            <div className="location">
            <span id='allProperties'>{props.allProperties}</span>
            </div>
          </div>
        </div>
  )
}

export default AgentCard;
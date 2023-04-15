import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Card.css'

const Card = (props) => {

  return (
        <CompactCard param = {props}/>
  )
}


function CompactCard ({ param}) {
  return (
    <div className="CompactCard" style={{
      background: '#0A1121',
    }}>
      <div className="detail">
        <span>{param.title}</span>
        <span>{param.value}</span>
      </div>
      <div className="radialBar">
        <CircularProgressbar value={param.barValue} text={`${param.barValue}%`}/>
      </div>
    </div>
  )
}


export default Card;
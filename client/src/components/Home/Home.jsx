import React from 'react'
import './Home.css'
import MainDash from '../MainDash/MainDash'
import Sidebar from '../Sidebar/Sidebar'

const Home = () => {
  return (
    <div className='Home'>
        <Sidebar/>
        <MainDash/>
    </div>
  )
}

export default Home
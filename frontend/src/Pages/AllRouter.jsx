import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import UserData from './UserData'

const AllRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/user" element={<UserData/>}/>
      </Routes>
    </div>
  )
}

export default AllRouter

import React from 'react'
import { Route, Routes } from 'react-router'
import Login from '../../screens/Login'

const AuthRouter = () => {
    console.log("In Auth Router");

  return (
    <div>
        <Routes>
            <Route path="/" element={<Login />} />
        </Routes>
    </div>
  )
}

export default AuthRouter
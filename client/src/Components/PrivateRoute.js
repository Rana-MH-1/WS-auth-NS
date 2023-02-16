import React from 'react'
import { Navigate } from 'react-router-dom'

const isAuth = localStorage.getItem('isAuth')


const PrivateRoute = ({children}) => {
  return isAuth ? children : <Navigate to='/'/>
}

export default PrivateRoute
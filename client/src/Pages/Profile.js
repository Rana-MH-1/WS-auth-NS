import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
    const user = useSelector(state=> state.AuthReducer.user)
  return (
    <div>
        <h2>{user.name}</h2>
        <h3>{user.email}</h3>
    </div>
  )
}

export default Profile
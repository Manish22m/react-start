import React, { useContext } from 'react'
import Context from '../context/UserContext'

function Profile() {
    const{user}= useContext(Context)
    if(!user) return <div>Please enter username</div>

    return <div>Successfully Logged in {user.username}</div>
}

export default Profile
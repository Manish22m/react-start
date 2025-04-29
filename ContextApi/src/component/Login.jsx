import React, { useContext, useState } from 'react'
import Context from '../context/UserContext'
function Login() {
    const[username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const{setuser}=useContext(Context)

    const submit = (e) =>{
        e.preventDefault();
        setuser({username, password})

    }
  return (
    <div>
        <h2>Log In</h2>
        <input type="text" 
        value={username}
        onChange={(e) => setusername(e.target.value) }
        placeholder='username' />
        <input type="text" 
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        placeholder='password' />
        <button onClick={submit}>Submit</button>
    </div>
  )
}

export default Login
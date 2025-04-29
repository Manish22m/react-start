import React from 'react'
import Context from './UserContext'

const ContextProvider=({children}) => {
    const [user, setuser]=React.useState(null)
  return (
    <Context.Provider value={{user, setuser}}>
    {children}
    </Context.Provider>
  )
}

export default ContextProvider
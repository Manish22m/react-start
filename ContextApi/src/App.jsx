
import './App.css'
import Login from './component/Login'
import Profile from './component/Profile'
import ContextProvider from './context/ContextProvider'

function App() {
  return (
    <ContextProvider>
      <h1>I am learning React</h1>
      <Login />
      <Profile />
    </ContextProvider>
  )
}

export default App

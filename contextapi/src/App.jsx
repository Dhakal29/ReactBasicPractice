
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile'
import Login from './components/Login'
function App() {

  return (
    <UserContextProvider>
      <div>HI Context API</div>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App

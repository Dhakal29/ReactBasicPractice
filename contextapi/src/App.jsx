
import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <div>HI Context API</div>
    </UserContextProvider>
  )
}

export default App

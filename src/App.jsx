import { useState, useEffect } from 'react'
import Header from "./components/Header"
import Login from './pages/Login'
import './App.css'
import Dashboard from './pages/Dashboard'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log({isLoggedIn})
  }, [isLoggedIn])

  return (
    <>
     <Header/>
     {!isLoggedIn ? <Login setIsLoggedIn={setIsLoggedIn} /> : 
     <Dashboard />}
    </>
  );
}

export default App

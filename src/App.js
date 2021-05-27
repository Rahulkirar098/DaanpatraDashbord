import React from 'react'
import Drawer from "./Components/Drawer";
import { Login } from "./Components/Pages";

function App() {
  
  const token = localStorage.getItem("token")
  
  return (
    <>
      {
        token ? <Drawer /> : <Login />
      }
      

    </>
  );
}

export default App;

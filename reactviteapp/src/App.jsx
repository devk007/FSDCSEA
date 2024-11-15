import React from 'react'
import Student from './Student'

function App() {
  let a=12
  const mystyle={
    backgroundColor:'red',
    color:'cyan'
  }
  return (
    <div style={mystyle}>ABES Engineering College
    <div style={mystyle}>{a}</div>
    <div style={mystyle}><Student/></div>
    </div>
    
  )
}

export default App
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>

      
    </>
  )
}

function Person (){
  const city = "Chattogram";
  const country = "Bangladesh"
  return (
    <h3>Hello I am Apolo, My City is {city}, My Country is {country} </h3>

  )
} 

export default App

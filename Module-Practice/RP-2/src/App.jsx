import { Suspense } from 'react'
import './App.css'
import Batsman from './Batsman'
import Counter from './Counter'
import Users from './Users'


const fetchUsers = fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())

function App() {

  return (
    <>
      <h2>React + RP-2</h2>

      <Suspense fallback={<h2>Loading...</h2>}>
        <Users fetchUsers = {fetchUsers}></Users>
      </Suspense>
      <Batsman></Batsman>
      {/* <Counter></Counter> */}
     
    </>
  )
}

export default App

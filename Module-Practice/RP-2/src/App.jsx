import { Suspense } from 'react'
import './App.css'
import Batsman from './Batsman'
import Counter from './Counter'
import Users from './Users'
import Friends  from './Friends'
import Posts from './Posts'
import Players from './Players'


// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json());

// const fetchFriends = async()=>{
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   return response.json();
// }

const fetchPosts = async() => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  return response.json()
}

function App() {

  // const postPromise = fetchPosts()

  // const friendsPromise = fetchFriends();

  return (
    <>
      <h2>React + RP-2</h2>

      <Players></Players>

      {/* <Suspense fallback={<h2>Posts are comming....</h2>}>
        <Posts postPromise={postPromise}></Posts>
      </Suspense> */}

      {/* <Suspense fallback={<h2>Loading...</h2>}>
        <Users fetchUsers = {fetchUsers}></Users>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Friends are coming...</h3>}>
        <Friends friendsPromise = {friendsPromise}></Friends>
      </Suspense> */}

      {/* <Batsman></Batsman> */}
      
      {/* <Counter></Counter> */}
     
    </>
  )
}

export default App

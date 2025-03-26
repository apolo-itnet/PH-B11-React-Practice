export default function friend({friend}){
  console.log(friend)
  const {name, email, username, phone } = friend


  return (
    <div className="card">
      <h3>Name: {name} </h3>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  )
}
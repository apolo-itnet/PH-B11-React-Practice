import { useState } from "react"

export default function Counter(){

  const [count, setCount] = useState(0);

  const handleIncrement = () => {

    setCount(1);
    setCount(count + 1);    

  }


  const counterStyle = {
    border: '2px solid yellow'
  }

  return (
    <div className="counter" style={counterStyle}>
      <h3>Count : {count}</h3>
      <button onClick={handleIncrement}>Add</button>
    </div>
  )
}
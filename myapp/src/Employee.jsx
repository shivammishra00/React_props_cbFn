import React from 'react'

function Employee(props) {
    let city = 'bhopal';
  return (
    <div>
       <h2> this is child  component </h2>
       {/* <p> abhi bhi h3 work nhi karega is liye on click me function call kiya </p> */}
       <h3>user(send from app.js): {props.d}</h3>  
       <button onClick={()=>props.d(city)}>send data : child to parent</button>
    </div>
  )
}

export default Employee

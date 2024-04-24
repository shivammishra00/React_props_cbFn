import React, { useState } from 'react'
import Employee from './Employee'

function App() {
  let user = 'mohit';   ////  parrent to child
  let [city,setcity] = useState('delhi');  /// initial value delhi pass kiya ...

  let cBFn = function (name) {  
    let city = name;  
    console.log('this fn is in app.js', city)
    setcity(city)   /// state function me value pass kiya direct name bhi kar sakte the . 
  }

  return (
    <div>
      <h2> this is app component : {city}   </h2>
      <hr />
      <Employee d={cBFn} />
    </div>
  )
}

export default App




import React, { useState, useEffect } from 'react';
import axios from 'axios'


const App = ()=>{
  let [inputVal, setInputVal] = useState ("");
  let [myVal, setMyVal] = useState(0);
  useEffect(()=>{
    let myInterval;
    if (myVal > 0){
     myInterval = setInterval(() => {
      setMyVal(myVal - 1);
    }, 1000);
  }
    return ()=>{
      clearInterval(myInterval);
    }
  }, [myVal]);
 
  return(
    <div>
      <input onInput={e=>setInputVal(e.target.value)}/>
      <button onClick={() =>setMyVal(inputVal)}>click here</button>
      {myVal}
    </div>
  );

}





export default App;


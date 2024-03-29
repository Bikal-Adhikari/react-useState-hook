import React, { useState } from "react";

function App() {
  const [isClicked, setIsClicked] = useState();

  const increase =()=>{
    
  }
  return (
    <div className="container">
      <h1>0</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;

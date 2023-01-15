import React, { useState } from "react";

function App() {
  // Here is new concept call use State - besically we can change the state of
  // component dynamically using useState
  // here useState take a parameter that initializaed state of the component
  // that value would store to the given count after that
  // we have setCount name function , it is besically use to change the state according to developer
  // to understand properly following examle is best way to go well in depth.
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;

import React, { useState } from "react";

function App() {
  const [name, Addname] = useState("");
  const [items, AddItems] = useState([]);
  function StoreItem(event) {
    const item = event.target.value;
    Addname(item);
  }

  function Add() {
    AddItems((prev) => {
      //...prev -> it is besically to fetch every item in the current position
      return [...prev, name];
    });
    Addname("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={StoreItem} type="text" value={name} />
        <button onClick={Add}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <li>{todoItem} </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

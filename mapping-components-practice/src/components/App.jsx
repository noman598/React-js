import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

// from the emojipedia we get the object data with the name of data, that variable name
// we use here to fetch data by following function , after that using map function it sent to
// Entry file function to use the data to show at every component

function CreateElement(element) {
  return (
    <Entry
      // the variable name that we are using here will be same as we use in Entry function

      key={element.id}
      emoji={element.emoji}
      name={element.name}
      meaning={element.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(CreateElement)};</dl>
    </div>
  );
}

export default App;

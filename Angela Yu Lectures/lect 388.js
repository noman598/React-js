// var React = require("react");
// var ReactDom = require("react-dom");
//instead of using upside line . modern way to importing it ->

import React from "react";
import ReactDom from "react-dom";

// ReactDom.render(What to SHow, where to Show);
//first parameter only take one html element that's why its written in inside div

const img = "https://picsum.photos/200";
ReactDom.render(
  <div>
    <h1>hello </h1>
    <p>This is ParagRaph</p>
    {/* there is a lorem picsum web-application , that give a link using that we can 
  show a new picture at every refresh on the web page*/}

    <img src={img} />
  </div>,
  document.getElementById("root")
);

//same render line can be written in pure javascript below side given->

// var h1 = document.createelement(h1);
// h1.innerHtml = "hello"
//document.getElement("root").appendCHild(h1);


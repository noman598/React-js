// var React = require("react");
// var ReactDom = require("react-dom");
//instead of using upside line . modern way to importing it ->

import React from "react";
import ReactDom from "react-dom";

// ReactDom.render(What to SHow, where to Show);
//first parameter only take one html element that's why its written in inside div
ReactDom.render(
  <div>
    <h1>hello </h1>
    <p>This is ParagRaph</p>
  </div>,
  document.getElementById("root")
);

//same render line can be written in pure javascript below side given->

// var h1 = document.createelement(h1);
// h1.innerHtml = "hello"
//document.getElement("root").appendCHild(h1);

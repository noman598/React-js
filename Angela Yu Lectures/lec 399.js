
import React from "react";
import ReactDom from "react-dom";


//Inline Css style is pretty useful in React ->
// here using inline css,can be created a javascript Object for css style.
// and store in a avariable then put that variable in html code.

const imageStyle = {
  "color": "red",
  "font-Size":"20px",
  "border":"2px solid red",
};

//here we can change the attribute of css using object variable
imageStyle.color = "blue";
// 
ReactDom.render(
    <h1 style = {imageStyle}> hello World!</h1>,
  document.getElementById("root")
);



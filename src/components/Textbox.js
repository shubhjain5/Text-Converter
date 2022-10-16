import React, { useState } from "react";
import "../App.css";
export default function Textbox(props) {
  function changeme(input) {
    console.log("yeah")
    settext(input.target.value);
  }

  function copyme() {
          var text = document.getElementById("sir");
          navigator.clipboard.writeText(text.value);
          if (text.length !== 0) {
            props.setalert(" Success:Text is copied");
            setTimeout(() => {
              props.setalert(null);
            }, 1300);
          }
  }

  

  const [text, settext] = useState("");

  function capital() {
          let words = text.split(" ");
          let uppercaseword = " ";
          words.forEach((element) => {
            uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " ";
          });
          settext(uppercaseword.trim());
          if (text.length !== 0) {
            props.setalert(" Success:converted to capitalized");
            setTimeout(() => {
              props.setalert(null);
            }, 1300);
          }
  }

  function romoveme(){
    let remove = text.split(/\s+/g).join(" ").trim()
    settext(remove)
    if (text.length !== 0) {
      props.setalert(" Success:All extra white spaces are removed");
      setTimeout(() => {
        props.setalert(null);
      }, 1300);
    }
  }
 

  function tolower() {
    // console.log("working")
            let newin = text.toLowerCase();
            settext(newin);
            if (text.length !== 0) {
              props.setalert(" Success:Converted to Lower case");
              setTimeout(() => {
                props.setalert(null);
              }, 1300);
            }
  }

  function toupper() {
    // console.log("working")
            let newin = text.toUpperCase();
            settext(newin);
            if (text.length !== 0) {
              props.setalert(" Success:Converted to Upper case");
              setTimeout(() => {
                props.setalert(null);
              }, 1300);
            }
  }
  return (
    <>
      <div className="mb-3 container my-4">
        <h1 style={{ color: props.mode === "light" ? "black" : "white" }}>
          {props.heading}
        </h1>
        <textarea
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#beb8b8",
            color: props.mode === "light" ? "black" : "white",
            border:
              props.mode === "light" ? "2px solid black" : "2px solid white",
          }}
          className="form-control"
          id="sir"
          rows="10"
          onChange={changeme}
          value={text}
        ></textarea>
        <button className="btn btn-primary my-3 mx-1" onClick={tolower}>
          To lower case
        </button>
        <button className="btn btn-primary my-3 mx-1" onClick={toupper}>
          To Upper case
        </button>
        <button className="btn btn-primary my-3 mx-1" onClick={capital}>
          Capitalized
        </button>
        <button className="btn btn-primary my-3 mx-1" onClick={copyme}>
          Copy Text
        </button>
        <button className="btn btn-primary my-3 mx-1" onClick={romoveme}  >
          Remove Spaces
        </button>
      </div>
      <div className="container">
        <h2 style={{ color: props.mode === "light" ? "black" : "white" }}>
          Your Summary
        </h2>
        <p style={{ color: props.mode === "light" ? "black" : "white" }}>
          {
            text.trim("").split(/\s+/).filter((e) => {return e !== 0;}).length}{" "}words
        </p>
        <p style={{ color: props.mode === "light" ? "black" : "white" }}>
          {text.trim("").length} Character
        </p>
      </div>
    </>
  );
}

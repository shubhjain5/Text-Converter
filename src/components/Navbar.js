import React from "react";
import { Link } from "react-router-dom";
export default function Navbar(props){
   
    return(
        <>
        <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className={`navbar-brand text-${props.mode==="light"?"dark":"light"}`}  to="/">{props.heading}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link text-${props.mode==="light"?"dark":"light"}`} to="./About">About</Link>
        </li>
      </ul>
      <div className="form-check form-switch">
            <input className="form-check-input" onClick={props.clickmeforgreen} type="checkbox" role="switch" id="Mode" />
            <label className={`form-check-label text-${props.mode==="light"?"dark":"light"}`} htmlFor="flexSwitchCheckChecked">{props.greenname}</label>
    </div>
    <div className="form-check form-switch mx-2">
            <input className="form-check-input" onClick={props.clickme} type="checkbox" role="switch" id="Mode" />
            <label className={`form-check-label text-${props.mode==="light"?"dark":"light"}`} htmlFor="flexSwitchCheckChecked">{props.name}</label>
    </div>
    </div>
  </div>
</nav>
        </>

    )
}
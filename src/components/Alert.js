import React from "react";
export default function Alert(props){
    return(
      <div style={{height:"40px"}}>
       {props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
        {props.alert}
       
      </div>}
      </div>
    )
}
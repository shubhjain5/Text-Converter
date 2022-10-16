import React from "react";


export default function about(props){
    return(

      <div id="aboutsctn" className="container">
        <h1 style={{ color: props.mode === "light" ? "black" : "white" }} className="text-center mb-4 mt-4"><b>About Us</b></h1>
        <hr/>
        <div className="accordion container" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne" >
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       Analyse Your Text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        This is Text Converter which you can use to make your text in lower case,in upper case,you can remove extra spaces and many more things with your text.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Browser Compatible
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
     This Text Converter software works in any wen browser such as chrome,firefox,Inrernet explorer,opera.
     
    </div>
    </div>
  </div>
 
</div>
      </div>







    )
    
}
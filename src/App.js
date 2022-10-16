
import './App.css';
// import Footer from './components/Footer';` a!~1Q1qw1q` `   `
import Textbox from './components/Textbox';
import Navbar from './components/Navbar'
import React ,{useState} from 'react';
import Alert from "./components/Alert"
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
  function App() {
    const [alert,setalert]=useState(null)
    const [name,setname] = useState("Enable Dark Mode")
    const [mode,setmode]= useState("light")
    const [greenname,setgreenname]=useState("Enable Green Mode")
    const [greenmode,setgreenmode]=useState("green")
    function clickmeforgreen(){
    if(greenmode==="green"){
      setgreenname("Enable Orange Mode")
      setgreenmode("orange")
      document.body.style.background="green"
      setalert(" Success:Green Mode is Enabled")
      setTimeout(() => {
        setalert(null)
      }, 1300);

    }
    else{
      setgreenname("Enable Green mode")
      setgreenmode("green")
      document.body.style.background="orange"
      setalert(" Success:Orange  Mode is Enabled")
      setTimeout(() => {
        setalert(null)
      }, 1300);
    }
    }
    function clickme(){
      if(mode==="light"){
      setmode("dark")
      setname("Disable Dark Mode")
      setalert(" Success:dark mode is enabled")
      setTimeout(() => {
        setalert(null)  
      }, 1000);
      document.body.style.backgroundColor="#0b2148"
      }
      else{
        setmode("light")
        setname("Enable Dark Mode")
        document.body.style.backgroundColor="#e9ecef"
        setalert(" Success:light mode is enabled")
        setTimeout(() => {
          setalert(null)
         }, 1000);
      }
  }
  
  return (
    <>
 <Router>

    <Navbar heading = "Text Converter" clickme={clickme} mode={mode} greenname = {greenname} greenmode={greenmode} clickmeforgreen={clickmeforgreen} name = {name}/>
    <Alert alert = {alert}/> 
      <Routes>
    <Route exact path="/" element={ <Textbox  setalert = {setalert} heading = "Text Converter"  mode={mode}/>}/>
    <Route exact path="/About" element={ <About setalert = {setalert}  mode={mode}/>}/>
      </Routes>
      </Router>
      {/* <Footer/> */}
    </>
    )
  }

export default App;

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {Routes,BrowserRouter,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Services from './Components/Services';
import Contacts from './Components/Contacts';
import Blogs from './Components/Blogs';
import Mobile from './Components/Mobile';
import Home from './Components/Home';
import Appliances from './Components/Appliances';
import Electronics from './Components/Electronics';




function App() {
  let[darkmode,setdarkmode]=useState("dark")
  let[alert,setalert]=useState("")

let showalert=(message,type)=>
{
  setalert({
    msg:message,
    type:type
  })
}






 let togglebutton=()=>{

  if(darkmode=="light")
  {
    setdarkmode("dark")
    document.body.style.backgroundColor='white';
    showalert("dark mode enabled","success")

  }
   else{
    setdarkmode("light")
    document.body.style.backgroundColor='dark';
    showalert("light mode enabled","success")
   }
 }

let [oldmode,newmode]=useState("primary")

let but=(prasad)=>{
  if(oldmode=="primary")
  {
    newmode("success")
  }
  else{
    newmode("primary")
  }
}



  return (
    <>


<BrowserRouter>
<Navbar></Navbar>


<Routes>
<Route path="/about" element={< About/>}></Route>
<Route path="/services" element={<Services/>}></Route>
<Route path="/blogs" element={<Blogs/>}></Route>
<Route path="/contacts" element={<Contacts/>}></Route>
<Route path="/mobile" element={<Mobile/>}></Route>
<Route path="/home" element={<Home/>}></Route>
<Route path="/appliances" element={<Appliances/>}></Route>
<Route path="/electronics" element={<Electronics/>}></Route>
  
  
</Routes>
  
  
</BrowserRouter>









    </>
  );
}

export default App;

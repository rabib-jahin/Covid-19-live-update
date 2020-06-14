import React,{useState} from "react"
import App from "./App"
import Home from "./home"
import Bd from "./bd"
import World from './world'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
 
function home(){
  
return <Router> <div>
 <div class="header">

<h1>Covid 19 Live Update</h1>
</div>
<div id="nav"></div>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark " >
  <a class="navbar-brand" href="#"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#"><Link to="/">Home</Link> <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><Link to="/App" >Covid Info(World wide)</Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><Link to="/bd"> Bangladesh Info</Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><Link to="/world"> World Info</Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><Link to="/about"> About</Link></a>
      </li>
    </ul>
  </div>
</nav>

</div>
<Switch>
<Route path="/App">
<App/>

</Route>
<Route path="/" exact component={Homie}>

</Route>
<Route path="/bd" exact component={Bd}>

</Route>
<Route path="/world" exact component={World}>

</Route>
<Route path="/about" exact component={About}>

</Route>
</Switch>
</Router>
}  
const Homie=()=>{
    return <div>

<div class="mid">
<p>This is a covid-19 tracker web app which parses data using api .To know worldwide data you have to click on covid info and enter the place name in the input box </p>

</div></div>
}
const About=()=>{
  return <div>

  <div class="mid">
  <p>Name :Rabib Jahin   </p><br/>
  <p>University:BUET  </p><br/>
  <p>Email:rabibjahin2000@gmail.com  </p><br/> 
  </div></div>
  }


export default home;
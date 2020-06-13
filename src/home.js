import React,{useState} from "react"
import App from "./App"
import Home from "./home"
import Bd from "./bd"
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
<div class="left">

<ul>
<li ><Link to="/"  ><a class="link">Home</a></Link></li>
  <li ><Link to="/App"><a class="link">Covid Info(World wide)</a></Link></li>
  <li ><Link to="/bd"><a class="link">Bangladesh Info</a></Link></li>

</ul>
</div>


</div>
<Switch>
<Route path="/App">
<App/>

</Route>
<Route path="/" exact component={Homie}>

</Route>
<Route path="/bd" exact component={Bd}>

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
export default home;
import React,{useState} from 'react';
import Greet from "./Components/Greet"
import './App.css';
import axios from "axios";
import Bd from "./bd"

var ara=[]
function App() {
  const[weather,setWeather] = useState({});
  const [caseRate,setrate]=useState('');
    const [loading,setLoading]=useState(false);
  const [deathRate,setRate]=useState('');
  const [data,set]=useState('');
  const change=(e)=>{

set(e.target.value);

  }
  const click=()=>{
    setLoading(true);
    let p={}
    let elem=document.getElementById("data").value;
  axios.get("https://covid19api.io/api/v1/AllReports")
  .then(res=>{

    for(let x=0;x<217;x++){
      if(res.data.reports[0].table[0][x].Country.toLowerCase().includes(elem.toLowerCase())){
        p=(res.data.reports[0].table[0][x]);
        setWeather(p);
        let s=p.TotalCases;
        let s3=p.TotalDeaths;
        s3=s3.replace(/,/g,'')
        s=s.replace(/,/g,'');
        console.log({data})
        let n=parseInt(s)
        let s2=p.TotalTests;
        s2=s2.replace(/,/g,'');
        console.log(s2);
        let n2=parseInt(s2);
        let n3=parseInt(s3)
        console.log(n2);
        setrate(String((n*100/n2)));
        setRate(String(n3*100/n));
      /*for(var key in p){
        console.log(key+" : "+p[key]+"\n");
      }*/
      
      console.log(n*100/n2)
      
      
      
      /*for(let i=0;i<ara.length;i++){
      
        for(let j=0;j<ara[i].length;j++){
          console.log( ara[i][j]+ " ")
        }
        console.log("\n")
      }*/
      

      }
    }
    setLoading(false);
  console.log(res.data)
 
  })
  .catch(err=>{
document.write("error parsing data!Try again")

  })
  
  
  
  
  }
    

  return (
    <div>
      
      
      <div class="input">
      <input id ="data" type="text" onChange={change} placeholder="Enter Country Name"></input>
<button onClick={click} class="btn">Submit</button>
<br/>
{loading ?(<div><div class="spinner-border m-5" role="status">

  <span class="sr-only">Loading...</span>
 
</div><p>Wait....</p> </div>):<p></p>

}
</div>
<div className="list" title={"Country: "+weather.Country+" Continent: "+weather.Continent}>

<ul><li>Country : {weather.Country}</li>

<li class="case">New Cases : {weather.NewCases}</li>
<li class="death">New Deaths :{weather.NewDeaths}</li>
<li class="rec">New Recovered : {weather.NewRecovered}</li>
<li class="case">ActiveCases : {weather.ActiveCases}</li>
   
<li class="case">Total Cases : {weather.TotalCases}</li> 
<li class="death">Total Deaths : {weather.TotalDeaths}</li>
<li class="rec">Total Recovered : {weather.TotalRecovered}</li>
<li class="case">Total Tests : {weather.TotalTests}</li>
<li class="case">Total Cases_1M population : {weather.TotCases_1M_Pop}</li>
<li class="death">Deaths_1M_pop :  {weather.Deaths_1M_pop}</li>
  
  
  
  <li class="case">Tests_1M population : {weather.Tests_1M_Pop}</li>

  <li class ="death">Serious_Critical : {weather.Serious_Critical}</li>

  


  <li class="rate">Total Case Rate : {caseRate} %</li>
  <li class="rate">Total Death Rate : {deathRate} %</li>






  </ul>
</div>
    </div>
    
    
  );
}

export default App;

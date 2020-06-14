import React,{Component} from "react"
import axios from "axios"

class world extends Component{
    state={
p:{},
bool:false,
loading:false,

    }
 
   click=()=>{ 
     let q={}  
    this.setState({

      
   loading:true
        
        })

axios.get("https://covid19api.io/api/v1/AllReports")
.then(res=>{
  
console.log(res);
for(let x=0;x<217;x++){

    if(res.data.reports[0].table[0][x].Country.toLowerCase().includes('world')){
q=res.data.reports[0].table[0][x];


}
}

this.setState({

p:q,
bool:true,
loading:false

})
})
.catch(e=>{

document.write("error")
})


let a=[];
a=Object.entries(q);
this.setState({
item:a

})

console.log(typeof a,a);
 
}

render(){
  

return <div>
<p>World Report :</p>
<button id="btn2" onClick={this.click}>Get Data</button>

{this.state.loading?
   ( <div class="spinner-border m-5" role="status">

<span class="sr-only">Loading...</span>
</div>

)





:<p></p>

}
{this.state.bool?
(<div class="card" id="cardno" >

  <div class="card-body ">
    <h5 class="card-title"></h5>

<p class="card-text">New Cases<br/>{this.state.p.NewCases}</p>




  </div>


  <div class="card-body card4">
    <h5 class="card-title "></h5>
<p class="card-text">New Deaths<br/>{this.state.p.NewDeaths}</p>

  </div>
  <div class="card-body " id="card3">
    <h5 class="card-title"></h5>
<p class="card-text">Total Cases<br/>{this.state.p.TotalCases}</p>

  </div>
  <div class="card-body card4">
    <h5 class="card-title"></h5>
<p class="card-text">Total Deaths<br/>{this.state.p.TotalDeaths}</p>

  </div>
  <div class="card-body card5">
    <h5 class="card-title"></h5>
<p class="card-text">New Recovered <br/>{this.state.p.NewRecovered}</p>

  </div>
  <div class="card-body card5">
    <h5 class="card-title"></h5>
<p class="card-text">Total Recovered <br/>{this.state.p.TotalRecovered}</p>

  </div>
</div>):<p></p>
}

</div>

}}
export default world;
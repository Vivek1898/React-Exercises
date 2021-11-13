//import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar'
import Counters from './components/counters';

//Counters from indext to app
//index-->App-->counters-->counter
//Conuters  to counter via props
//Because parent child relationship
//No p-c relationship b/w counters and app
//So we have t--> lifting state up
class App extends Component  {
  state={
    counters :[
        {id:1, value:5},
        {id:2, value:0},
        {id:3, value:0},
        {id:4, value:0},
    ]
        };
        //counter raise ondelete to counters to handle
        handledelete=countid => {
    
           const counters=this.state.counters.filter(c => c.id !== countid);
           this.setState({counters:counters});
           //Key value same
        };
        handlereset= ()=>{
    const counters=this.state.counters.map(c =>{
        c.value=0;
        return c;
    });
    this.setState({counters})
        };
        
        handleincrement = counter =>{
            //Clone
          const counters=[...this.state.counters];
          //taking care of main value of counter doesnt cahnge
          const index=counters.indexOf(counter);
          //copy
          counters[index]={...counter};
          counters[index].value++;
          this.setState({counters});
        };
        handledecrement = counter =>{
          //Clone
        const counters=[...this.state.counters];
        //taking care of main value of counter doesnt cahnge
        const index=counters.indexOf(counter);
        //copy
        counters[index]={...counter};
        counters[index].value--;
        this.setState({counters});
      };
     render(){
  return (
<React.Fragment>
<Navbar totalcounters={this.state.counters.filter( c=> c.value>0).length}/>
 <main className="container">
<Counters 
counters={this.state.counters}
onReset={this.handlereset} 
onIncrement={this.handleincrement}
onDecrement={this.handledecrement}
onDelete={this.handledelete}
/>
 </main>
</React.Fragment>

  );
}
}  
export default App;

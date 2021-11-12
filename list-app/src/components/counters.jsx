import React, { Component } from 'react';
import Counter from "./counter"

class Counters extends React.Component {
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
    }
    render() { 
        return (
            <div>
                <button 
                onClick={this.handlereset}
                className="btn btn-primary btn-sm m-2">Reset</button>
              {this.state.counters.map(counter =>
                 <Counter 
                 key={counter.id} 
                 onDelete={this.handledelete}
                 onIncrement={this.handleincrement}
                //   value={counter.value} id={counter.id}
                  counter={counter}
                  >
                     <h4>Counter #{counter.id}</h4>
                     </Counter>
                     )}
                 
            </div>
        );
    }
}
 
export default Counters;
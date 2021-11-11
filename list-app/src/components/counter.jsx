//imrc-import react comp
//c-class component
import React, { Component } from 'react';

class Counter extends React.Component {
    //STATE BASICALLY object ..that value returned
    state={
        count:0
    };
    render() { 
         //this gives error due to long element 
         //babel React.creareelement can,t handle 2 dlements
         //React.createelement('diiv')
         //so we have to put in diiv
        //return <h1>Hello WOrld</h1> <button>Increment</button>;
       
        return (
        <React.Fragment>

            <span>{this.formatCount()}</span>
            <h1>Hello WOrld</h1>
         <button>Increment</button>
         </React.Fragment>
         
         );
         //We can also use div
    }
    formatCount(){
        const{count}=this.state;
        return count===0?'Zero':count;
    }
}
 
export default Counter;

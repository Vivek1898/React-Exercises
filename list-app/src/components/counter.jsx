//imrc-import react comp
//c-class component
import React, { Component } from 'react';

class Counter extends React.Component {
    //STATE BASICALLY object ..that value returned
    state={
        count:0,            // These are properties
        //imageurl:"https://picsum.photos/200"
        tags:['tag1','tag2','tag3']
    };
    styles={
        fontSize:30,
        fontWeight:"bold",
        color:"black"
    };
    rendertags(){
        if(this.state.tags.length === 0) return <p>There are no tags</p>;
 {/* have to give key else error ..key should be unique */}
        return<ul> {this.state.tags.map(tag => <li key={tag}> {tag}  </li>)} </ul>;
    };
//Binding event handlers
    //Click Events
    //bind--where and what to set
    //Use arrow function to ignore constructor
//     constructor(){
//         //Call cons of parent class
//         super();
//      this.handleinc= this.handleinc.bind(this)
        
// }
handleinc= (product) => {
      console.log(product) 
      //this non accesible so we use bind method
      //setstate---get state and auto changes in virtual dom
      this.setState({count:this.state.count+1})
    };
    //How
    //set state means the state going to change
    //now asychronus call to render..that it happens
    //react will compare virtual and old dom
    //only the change elemrnt will be highlighted

// arghandleinc =()=>{
//     this.handleinc({id:1})
// }

    render() { 
         //this gives error due to long element 
         //babel React.creareelement can,t handle 2 dlements
         //React.createelement('diiv')
         //so we have to put in diiv
        //return <h1>Hello WOrld</h1> <button>Increment</button>;
       let classes="btn btn-lg ";
       classes+=this.state.count===0 ?"btn-warning":"btn-secondary";

        return (
        <div>
         {/* <img src={this.state.imageurl} alt="image" /> */}
            {/* <span style={this.styles}className="badge badge-primary m-2" >{this.formatCount()}</span> */}
            {/* <h1>Hello WOrld</h1> */}
            <button  className="btn btn-primary btn-lg  ">{this.formatCount()}</button>
            {/* //Inline stles */}   
                                                 {/* onClick={this.arghandleinc} */}
         <button style={{fontSize:35}} onClick={()=>{this.handleinc({id:1})}} className="btn btn-secondary btn-sm ">Increment</button>
         

         {/* true and string  --> string */}
         {this.state.tags.length === 0 && <p>"Plese crete new tag"</p> }
         {this.rendertags()}
         </div>

         
         );
         //We can also use div
    }
    formatCount(){
        const{count}=this.state;
        return count===0?'Zero':count;
    }
}
 
export default Counter;

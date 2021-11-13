//imrc-import react comp
//c-class component
import React, { Component } from 'react';

class Counter extends React.Component {
    //STATE BASICALLY object ..that value returned
    state={
        value:this.props.counter.value           // These are properties
        //imageurl:"https://picsum.photos/200"
        //tags:['tag1','tag2','tag3']
    };
    styles={
        fontSize:15,
        fontWeight:"bold",
        color:"black"
    };
   // rendertags(){
      //  if(this.state.tags.length === 0) return <p>There are no tags</p>;
 //{/* have to give key else error ..key should be unique */}
       // return<ul> {this.state.tags.map(tag => <li key={tag}> {tag}  </li>)} </ul>;
  //  };
//Binding event handlers
    //Click Events
    //bind--where and what to set
    //Use arrow function to ignore constructor
//     constructor(){
//         //Call cons of parent class
//         super();
//      this.handleinc= this.handleinc.bind(this)
        
// }
//handleinc= (product) => {
      //console.log(product) 
      //this non accesible so we use bind method
      //setstate---get state and auto changes in virtual dom
     // this.setState({count:this.state.count+1})
    //};
    //How
    //set state means the state going to change
    //now asychronus call to render..that it happens
    //react will compare virtual and old dom
    //only the change elemrnt will be highlighted

// arghandleinc =()=>{
//     this.handleinc({id:1})
// }

    render() { 

        

//console.log("props",this.props);

         //this gives error due to long element 
         //babel React.creareelement can,t handle 2 dlements
         //React.createelement('diiv')
         //so we have to put in diiv
        //return <h1>Hello WOrld</h1> <button>Increment</button>;
       

        return (
        <div className="row ">
            <div className="col-1">
            <button style={{fontSize:20}} className="{btn btn-primary btn-sm m2}  ">{this.formatCount()}</button>
            </div>
            <div className="col">
            {/* {this.props.children} */}
            <button style={{fontSize:20 , margin:5}} onClick ={()=>this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm ">+</button>
          <button style={{fontSize:20}} onClick ={()=>this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm " disabled={this.props.counter.value === 0 ? "disabled":""}>-</button>
          <button onClick={()=>this.props.onDelete(this.props.counter.id)} style={{fontSize:20 ,margin:5}} className="btn btn-danger btn-sm m2">Delete</button>
            </div>
          
         {/* <img src={this.state.imageurl} alt="image" /> */}
            {/* <span style={this.styles}className="badge badge-primary m-2" >{this.formatCount()}</span> */}
            {/* <h1>Hello WOrld</h1> */}
           
            {/* //Inline stles */}   
                                                 {/* onClick={this.arghandleinc} */}
        
         

         {/* true and string  --> string */}
         {/* {this.state.tags.length === 0 && <p>"Plese crete new tag"</p> }
         {this.rendertags()} */}

         
         </div>

         
         );
         //We can also use div
    }
    getbadgeclass(){
        let classes="btn  ";
       classes+=this.props.counter.value ===0 ?"btn-warning":"btn-secondary";
       return classes;
    }
    formatCount(){
        const{value}=this.props.counter;
        return value===0?'Zero':value;
    }
}
 
export default Counter;

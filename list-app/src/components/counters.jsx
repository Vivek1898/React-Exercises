import React, { Component } from 'react';
import Counter from "./counter"

class Counters extends React.Component {
 
    render() { 
        //object Destructing replace this.props
        const {onReset,counters,onDelete,onIncrement}=this.props;
        return (
            <div>
                <button 
                //onClick={this.props.onReset}
                onClick={onReset}
                className="btn btn-primary btn-sm m-2">Reset</button>
              {counters.map(counter =>
                 <Counter 
                 key={counter.id} 
                 onDelete={onDelete}
                 onIncrement={onIncrement}
                 onDecrement={this.props.onDecrement}
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
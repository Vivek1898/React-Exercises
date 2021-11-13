import React, { Component } from 'react';
//input lIkd :boolean
//out -- Onclick

class Like extends React.Component {
  

    render() { 
        let classes="fa fa-heart";
        if(!this.props.liked) classes+="-o";
        return ( 
        <i onClick={this.props.onClick} style={{cursor:'pointer'}} className={classes} aria-hidden="true" ></i>
        );
    }
}
 
export default Like;
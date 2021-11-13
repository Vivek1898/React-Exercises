import React, { Component } from 'react';
//Stateless Functional Component
//Object destructing remove props
//
const Navbar=({totalcounters}) =>{
  return(
    <nav className="navbar navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        Navbar <span className="btn  btn-secondary">
          {totalcounters}
        </span>
        </a>
    </div>
  </nav>

  );
}
// class Navbar extends React.Component {
//     render() { 
//         return (
        
//         );
//     }
// }
 
export default Navbar;
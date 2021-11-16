import React from "react";
import {Link} from 'react-router-dom';
//Link only updates cintent insted of all data refresh
// it has handler onclick (prop) that prevent default behaviour of anchor tags
const NavBar = () => {
  return (
    <ul>
      <li>
       <Link to="/">Home</Link>
      </li>
      <li>
       <Link to="/products">Products</Link>
      </li>
      <li>
       <Link to="/posts/2018/06">Posts</Link>
      </li>
      <li>
       <Link to="/admin">Admin</Link>
      </li>
    </ul>
  );
};

export default NavBar;

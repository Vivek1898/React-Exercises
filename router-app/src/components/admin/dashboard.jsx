import React from "react";
import { Route } from "react-router-dom";
import Users from "./users";
import Posts from "./posts";
import Sidebar from "./sidebar";
const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Sidebar/>
      <Route path="/admin/users" component={Users}/>
      <Route path="/admin/posts" component={Posts}/>
    </div>
  );
};

export default Dashboard;

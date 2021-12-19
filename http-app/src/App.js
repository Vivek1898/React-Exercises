import React, { Component } from "react";
import {ToastContainer} from "react-toastify"
import config from "./config.json"
import http from "./services/httpmodule";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";



class App extends Component {
  state = {
    posts: []
  };
//For get data 
// Promise -->return obj of result of asynchronus operation
async componentDidMount() {
  //pending---then resolve reject
  // const promise=axios.get('https://jsonplaceholder.typicode.com/posts');
  //using await so we use async 
  // const response=await promise;

  const {data:posts}= await http.get(config.api);
  this.setState({posts});
}


  handleAdd = async () => {
    const obj={title:"a",body:"b"};
    const {data:post}= await http.post(config.api,obj);
    const posts=[post,...this.state.posts];
    this.setState({posts});
  };

  handleUpdate = async post => {
    post.title="UPDATED";
    // http.patch(config.api+'/'+post.id,{title:post.title});
   await http.put(config.api  + '/' + post.id,post);
    const posts=[...this.state.posts];
    const index=posts.indexOf(post);
    posts[index]={...post};
    this.setState({posts});

  };
  //Pestimistic --server then ui
  //optimistic update--> ui then server
//HANDLING ERROR
//EXPECTED (404 NOT FOND && 400 BAD REQUEST)--CLIEN ERRORS
//SPECIFIC MESSAGE

//UNEXPECTED (NETWORK,SEREVER ,DB DOWN  AND BUG)
//LOG THEM
//DISPLAY A FRIENDLY MESSAGE

  handleDelete = async post => {
    const orignalposts=this.state.posts;
    const posts=this.state.posts.filter(p=>p.id !== post.id);
    this.setState({posts});
    try{
      await http.delete(config.api  + '/' + post.id);
    }
    catch(ex){
      if (ex.response && ex.response.status === 404){
        alert("Already deleted")
      }
      this.setState({posts:orignalposts});
    }
   

   
  };

  render() {
    return (
      <React.Fragment>
        <ToastContainer/>
        <button className="btn btn-primary" onClick={this.handleAdd}>
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map(post => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App;

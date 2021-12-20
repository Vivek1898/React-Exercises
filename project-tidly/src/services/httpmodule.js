import axios from 'axios';
import logservice from "./logservice";

import {toast} from "react-toastify";

//sending post ...include header for http requeest




//For unexpected error
axios.interceptors.response.use(null,error=>{
    const experror= error.response && 
    error.response.status >=400 && 
    error.response.status<500;
  
    if(!experror){
      logservice.log(error);  
    //   console.log('Error logged ',error);
      toast.error("An unexpected error occurs")
    }
  
    return Promise.reject(error);
    //Ctrl pass to catch
  });

  function setJwt(jwt){
    axios.defaults.headers.common['x-auth-token']=jwt;
  }
  
  export default{
      get:axios.get,
      post: axios.post,
      put:axios.put,
      delete: axios.delete,
      setJwt

  };
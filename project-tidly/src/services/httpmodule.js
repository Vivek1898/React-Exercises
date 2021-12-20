import axios from 'axios';
import logservice from "./logservice";
import {toast} from "react-toastify";

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
  })
  
  export default{
      get:axios.get,
      post: axios.post,
      put:axios.put,
      delete: axios.delete

  };
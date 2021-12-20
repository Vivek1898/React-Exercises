import jwtDecode from "jwt-decode";
import http from "./httpmodule";
import {apiUrl} from "../config.json";

const api=apiUrl+"/auth";
const tokenkey="token";
//Reverse order due to bi directional dependicies
http.setJwt(getJwt());

export async function login(email,password) {
    const {data:jwt}  =  await http.post(api,{email,password});
   localStorage.setItem(tokenkey,jwt);

}
 //Reg form
 export async function loginWithJwt(jwt){
    localStorage.setItem(tokenkey,jwt);
 }


export function logout(){
    localStorage.removeItem(tokenkey);
}

export function getCurrenUser(){
    try {
        const jwt=localStorage.getItem(tokenkey);
        return jwtDecode(jwt);
        
     
      } catch (error) {
          return null;
        //No valiad web token
      }
}

//Api end pont with headers--->call from http module
export function getJwt(){
    return localStorage.getItem(tokenkey);
}


export default{
    login,
    loginWithJwt,
    logout,
    getCurrenUser,
    getJwt

}
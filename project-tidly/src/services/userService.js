import http from "./httpmodule";
import {apiUrl} from "../config.json";

const api=apiUrl+"/users";
export function register(user){
    return http.post(api,{
        email:user.username,
        password:user.password,
        name:user.name
    });

}
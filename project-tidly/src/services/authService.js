import http from "./httpmodule";
import {apiUrl} from "../config.json";

const api=apiUrl+"/auth";

export function login(email,password) {
    return http.post(api,{email,password});
}  
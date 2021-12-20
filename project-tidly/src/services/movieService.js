import http from "./httpmodule";
import {apiUrl} from "../config.json";

const api=apiUrl+"/movies";
export function getMovies(){
    return http.get(api);

}
export function getMovie(movieId){
    return http.get(api + "/"+ movieId);

}
export function saveMovie(movie){
    //Same id encounters--Update
    if(movie._id){
        const body={...movie};
        delete body._id;
      return http.put(api+ "/"+movie._id,body);
    }
    return http.post(api,movie);


}

export function deleteMovie(movieId){
    return http.delete(api+ "/"+ movieId);

}


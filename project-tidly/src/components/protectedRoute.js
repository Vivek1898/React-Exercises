import React from 'react';
import { Route ,Redirect} from "react-router-dom";
import auth from '../services/authService';

const ProtectedRoute = ({path,component:Component,render,...rest} ) => {
    return (  
    <Route 
    
    {...rest}
    render={props =>{
        //redirect to movie edit page not login by using props
     if(!auth.getCurrenUser()) return <Redirect to={{
         pathname:"/login",
         state:{from :props.location}
     }}/>
     return Component ? <Component {...props} />: render(props);
   
      }}></Route>  );
}
 
export default ProtectedRoute;
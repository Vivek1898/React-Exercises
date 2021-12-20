import React from 'react';
import Joi from 'joi-browser';

import Form from './common/form';
import Input from './common/input';
import auth from "../services/authService";
import { Redirect } from 'react-router-dom';

class LoginForm extends Form {
// username=React.createRef();
// password=React.createRef();
// componentDidMount(){
//     this.username.current.focus();
// }
state={
    data:{username:"",password:""},
    errors:{}
};

    doSubmit= async ()=>{

        try {
            const {data}=this.state;
            //Store jwt on login
        await auth.login(data.username,data.password);
        
        //redirect using history
        //come from protected route
        //if state is defined otherwise home page
        const{state}=this.props.location;
        window.location=state ? state.from.pathname : "/" ;
            
        } catch (ex) {
            if(ex.response && ex.response.status === 400){
              const errors= {...this.state.errors};
              errors.username=ex.response.data;
              this.setState({errors});
            }
        }
     
        //Call server
        console.log("Submitted");
    }



//also e.currentTarget 


    render() { 
        
        if(auth.getCurrenUser()) return <Redirect to="/"/>;
        return (
        <div>
            <h1>Login</h1>
            <form  onSubmit={this.handleSubmit}>
            {this.renderInput("username","Username")}
            {this.renderInput("password","Password","password")}
             {this.renderButton("Login")}
            </form>
        </div>
        );
    }
}
 
export default LoginForm;
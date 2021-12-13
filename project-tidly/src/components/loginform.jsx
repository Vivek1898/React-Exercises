import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import Input from './common/input';

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

    doSubmit=()=>{
       
        //Call server
        console.log("Submitted");
    }



//also e.currentTarget 


    render() { 
        
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
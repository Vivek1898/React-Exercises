import React from 'react';
import Joi from 'joi-browser';
import Input from './common/input';

class LoginForm extends React.Component {
// username=React.createRef();
// password=React.createRef();
// componentDidMount(){
//     this.username.current.focus();
// }
state={
    account:{username:"",password:""},
    errors:{}
};
schema={
 username:Joi.string().required().label("Username"),
 password:Joi.string().required().label("Password")

};


//Using array for errors easy to find using find method
//thahts why we use object
validate=()=>{
    const options={abortEarly:false}
const result=Joi.validate(this.state.account,this.schema,options);
if(!result.error) return null;
const errors={};
for(let item of result.error.details)
    errors[item.path[0]]=item.message;
    return errors;



   };
    
//handling form submisson bc it reloads whole page on refresh
    handleSubmit=e =>{
   e.preventDefault();
   //render error messages
const errors=this.validate();

this.setState({errors : errors || {}  });
if(errors) return;


    };

    validateProperty =({name,value}) =>{
        const obj={[name]:value};
        const schema={[name]:this.schema[name]};
      const{error}= Joi.validate(obj,schema);
      if(!error) return null;
      return error.details[0].message;
    }

//also e.currentTarget 
handleChange=({currentTarget:input})=>{
   const errors={...this.state.errors};
    //On change
    const errorMsg=this.validateProperty(input);
    if(errorMsg) errors[input.name]=errorMsg;
    else delete errors[input.name];
     
    //clone
    const account={...this.state.account};
    account[input.name]=input.value;
    this.setState({account,errors});
};

    render() { 
        const{account,errors}=this.state;
        return (
        <div>
            <h1>Login</h1>
            <form  onSubmit={this.handleSubmit}>
               <Input name="username"
                value={account.username}
               label="Username" 
               onChange={this.handleChange}
               error={errors.username}
                />
                <br/>
                <Input name="password" 
                value={account.password}
               label="Password" 
               onChange={this.handleChange} 
               error={errors.password}
               />

                    <br/>
                    <button 
                    className="btn btn-primary">Submit</button>
            </form>
        </div>
        );
    }
}
 
export default LoginForm;
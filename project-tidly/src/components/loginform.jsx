import React from 'react';
import Input from './common/input';

class LoginForm extends React.Component {
// username=React.createRef();
// password=React.createRef();
// componentDidMount(){
//     this.username.current.focus();
// }
state={
    account:{username:'',password:''},
    errors:{
        username:'Username is Required'
    }
}
//Using array for errors easy to find using find method
//thahts why we use object
validate=()=>{
    const errors={};
    const{account}=this.state;
    if(account.username.trim()==='')
     errors.username='Username is required ';

  if(account.password.trim()==='')
  errors.password='Password is required ';
  return Object.keys(errors).length===0 ? null : errors;
   };
    
//handling form submisson bc it reloads whole page on refresh
    handleSubmit=e =>{
   e.preventDefault();
   //render error messages
const errors=this.validate();

this.setState({errors : errors || {}  });
if(errors) return;


    };

    validateProperty =input =>{
        if(input.name=='username'){
         if(input.value.trim()==='') return 'Username is Required';
} 
if(input.name=='password'){
    if(input.value.trim()==='') return 'Password is Required';
} 
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
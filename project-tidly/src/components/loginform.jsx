import React from 'react';
import Input from './common/input';

class LoginForm extends React.Component {
// username=React.createRef();
// password=React.createRef();

// componentDidMount(){
//     this.username.current.focus();
// }
state={
    account:{username:'',password:''}
}

    //handling form submisson bc it reloads whole page on refresh
    handleSubmit=e =>{
   e.preventDefault();


    };
//also e.currentTarget 
handleChange=({currentTarget:input})=>{
    //clone
    const account={...this.state.account};
    account[input.name]=input.value;
    this.setState({account});
}

    render() { 
        const{account}=this.state;
        return (
        <div>
            <h1>Login</h1>
            <form  onSubmit={this.handleSubmit}>
               <Input name="username" value={account.username}
               label="Username" onChange={this.handleChange} />
                <br/>
                <Input name="password" value={account.password}
               label="Password" onChange={this.handleChange} />

                    <br/>
                    <button className="btn btn-primary">Submit</button>
            </form>
        </div>
        );
    }
}
 
export default LoginForm;
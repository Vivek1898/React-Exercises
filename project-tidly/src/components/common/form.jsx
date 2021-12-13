import React from 'react';
import Joi from 'joi-browser';
import Input from './input';
import Select from './select';
class Form extends React.Component {
    state={
        data:{},
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
       const result=Joi.validate(this.state.data,this.schema,options);
       if(!result.error) return null;
       const errors={};
       for(let item of result.error.details)
           errors[item.path[0]]=item.message;
           return errors;
        };

        validateProperty =({name,value}) =>{
            const obj={[name]:value};
            const schema={[name]:this.schema[name]};
          const{error}= Joi.validate(obj,schema);
          if(!error) return null;
          return error.details[0].message;
        };

        //handling form submisson bc it reloads whole page on refresh
    handleSubmit=e =>{
        e.preventDefault();
       //render error messages
         const errors=this.validate();
    
        this.setState({errors : errors || {}  });
    
        if(errors) return;
        this.doSubmit();
    };

    handleChange=({currentTarget:input})=>{
        const errors={...this.state.errors};
         //On change
         const errorMsg=this.validateProperty(input);
         if(errorMsg) errors[input.name]=errorMsg;
         else delete errors[input.name];
          
         //clone
         const data={...this.state.data};
         data[input.name]=input.value;
         this.setState({data,errors});
     };
     renderButton(label){
         return(
     <button disabled={this.validate()} className="btn btn-primary">
         {label}
     </button>
         );
     };
     renderSelect(name,label,options){
        const{data,errors}=this.state;
        return (
            <Select
           
            name={name}
            value={data[name]}
           label={label}
           options={options}
           onChange={this.handleChange}
           error={errors[name]}
            />
        
            
        ); 
   
 }

     renderInput(name,label,type='text'){
        const{data,errors}=this.state;
        return (
            <Input 
            type={type}
            name={name}
            value={data[name]}
           label={label}
           onChange={this.handleChange}
           error={errors[name]}
            />
        
            
        ); 
     }
    
}
 
export default Form;
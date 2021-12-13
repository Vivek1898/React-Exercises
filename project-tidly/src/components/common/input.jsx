import React from 'react';
// const Input = ({name,label,value,error,onChange,type})
const Input = ({name,label,error, ...rest}) => {
    return ( 
        //Using rest and spread for rest props
        <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input 
        // value={value}
        // onChange={onChange}
        // type={type} 
        {...rest}
        name={name} 
        id={name} 
        
        className="form-control" />

        {error && <div className="alert alert-danger">{error}</div>}
        <br/>
        </div>

     );
}
 
export default Input;
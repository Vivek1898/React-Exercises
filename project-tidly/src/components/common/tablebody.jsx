import React, { Component } from 'react';
import _ from 'lodash';

class TableBody extends React.Component {
    rendercell=(item,column)=>{
        if(column.content) return column.content(item);
  return _.get(item,column.path);

    };
    creteKey =(item,column) =>{
    return item._id +(column.path || column.key);
    }
    render() { 
        const{data,columns}=this.props;
        return (
<tbody>
   {
       data.map(item =><tr key={item._id} >
           {/* Acessing property dynamically using [] 
           2- Loadash get method
           */}
      { columns.map(column => 
      <td key={this.creteKey(item,column)}>
          {this.rendercell(item,column)}
          
          </td> )}     
       
    </tr>) 

   } 
    
</tbody>



        );
    }
}
 
export default TableBody;
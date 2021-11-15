import React, { Component } from 'react';
import _ from 'lodash';

class TableBody extends React.Component {
    rendercell=(item,column)=>{
        if(column.content) return column.content(item);
  return _.get(item,column.path);

    };
    render() { 
        const{data,columns}=this.props;
        return (
<tbody>
   {
       data.map(item =><tr >
           {/* Acessing property dynamically using [] 
           2- Loadash get method
           */}
      { columns.map(column => <td>{this.rendercell(item,column)}</td> )}     
       
    </tr>) 

   } 
    
</tbody>



        );
    }
}
 
export default TableBody;
import React, { Component } from 'react';
//columns
//sortcolumn
//on sort fnkn


class TableHeader extends React.Component {
    raiseSort = path =>{
        //First setstate 
          //then go to render and do main work
          //create new obj using spread operator
          const sortColumn={...this.props.sortColumn};
          //Path same
          if(sortColumn.path=== path)
          //Then desc
          sortColumn.order=( sortColumn.order ==='asc')?'desc':'asc';
          else{
              //else acs by default
              sortColumn.path=path;
              sortColumn.order='asc';
          }
        this.props.onSort(sortColumn);
  };

    render() { 
        return (
            <thead>
                <tr>
                    {
                        this.props.columns.map(column=>
                        <th key={column.path || column.key} onClick={ ()=>this.raiseSort(column.path)}>{column.label}</th>)
                    }
                    
                </tr>
            </thead>
            );
    }
}
 
export default TableHeader;
import React from 'react';
import TableHeader from './tableheader';
import TableBody from './tablebody';
const Table = ({columns,sortColumn,onSort,data}) => {
//Picking properties from argument which is props oject

    return (  

        <table className="table">
        <TableHeader 
        columns={columns}
        sortColumn={sortColumn}
        onSort={onSort}
        
        />
        <TableBody 
        columns={columns}
        data={data}
        
        
        />
         {/* Deletion */}
         

      </table>

    );
}
 
export default Table;
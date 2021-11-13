import React, { Component } from 'react';
import _ from 'lodash';


const Pagination = props => {
    const { itemscount ,pagesize} = props;
    const pagescount=Math.ceil (itemscount /pagesize);
    //Handle one page
    if(pagescount === 1) return null;
//Lodash and range array
   const pages= _.range(1,pagescount+1);

    return(
     <nav>
        <ul className="pagination">
            {pages.map(page =>
            <li key={page} className="page-item">
                <a className="page-link">{page}</a>
                </li>
                
                )}
            
        </ul>
    </nav>
    );
};
 
export default Pagination;
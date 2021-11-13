import React, { Component } from 'react';
import _ from 'lodash';


const Pagination = props => {
    const { itemscount ,pagesize ,onPagechange,currentpage} = props;
    console.log(currentpage);
    const pagescount=Math.ceil (itemscount /pagesize);
    //Handle one page
    if(pagescount === 1) return null;
//Lodash and range array
   const pages= _.range(1,pagescount+1);
//MAp
    return(
     <nav>
        <ul className="pagination">
            {pages.map(page =>
            <li key={page} className={page === currentpage ? 'page-item active' : 'page-item' }>
                <a className="page-link" 
                onClick={()=>onPagechange(page)}>{page}</a>
                </li>
                
                )}
            
        </ul>
    </nav>
    );
};
 
export default Pagination;
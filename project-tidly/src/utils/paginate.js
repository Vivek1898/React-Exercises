import _ from 'lodash';

export function paginate(items,pagenumber,pagesize){
   const startindex=(pagenumber-1)*pagesize;
   //Loadash will take all items from current page 
   //slice array from startindex
  //_.slice(items,startindex)
  //_.take
  //lodasah wrapper--->to array using value

 return  _(items)
 .slice(startindex)
 .take(pagesize)
 .value();

}

import React ,{Component} from 'react';
import Like  from './common/like';


class MoviesTable extends React.Component {

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
       
        const {movies,onDelete,onLike }=this.props;
        return ( 
    
    <table className="table">
                <thead>
                    <tr>
                        <th onClick={ ()=>this.raiseSort("title")}>Title</th>
                        <th onClick={ ()=>this.raiseSort("genre.name")}>Genre</th>
                        <th onClick={ ()=>this.raiseSort("numberInStock")}>Stock</th>
                        <th onClick={ ()=>this.raiseSort("dailyRentaRate")}>Rate</th>
                        {/* empty for delete */}
                        <th></th> 
                        {/* For LIke component */}
                        <th></th> 
                    </tr>
                </thead>
                <tbody>
                    {movies.map(movie =>  
                         <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td>
                            <Like liked={movie.liked} 
                            onClick={() => onLike(movie)}/>
                        </td>
                         
                        {/* Deletion */}
                        <td><button 
                        onClick={() =>onDelete (movie)} 
                        className="btn btn-danger btn-sm">Delete</button></td>
                    </tr>)}
                 
                </tbody>
            </table>
    
         );
    }
}
 



 
export default MoviesTable;
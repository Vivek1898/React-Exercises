import React ,{Component} from 'react';
import TableHeader from './common/tableheader';
import TableBody from './common/tablebody';
import Like  from './common/like';


class MoviesTable extends React.Component {
columns=[
    {path:'title',label:'Title'},
    {path:'genre.name',label:'Genre'},
    {path:'numberInStock',label:'Stock'},
    {path:'dailyRentalRate',label:'Rate'},
    {key:"like" ,content: movie=> <Like liked={movie.liked} onClick={() => this.props.onLike(movie)}/>},
    {key:"delete" ,content:movie =><button onClick={() =>this.props.onDelete (movie)} className="btn btn-danger btn-sm">Delete</button>}
];



    render() { 
       
        const {movies,onSort,sortColumn }=this.props;
        return ( 
    
    <table className="table">
              <TableHeader 
              columns={this.columns}
              sortColumn={sortColumn}
              onSort={onSort}
              
              />
              <TableBody 
              columns={this.columns}
              data={movies}
              
              
              />
               {/* Deletion */}
               

            </table>
    
         );
    }
}
 



 
export default MoviesTable;
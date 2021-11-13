import React, { Component } from 'react';
import Like  from './common/like';
import { getMovies} from '../services/fakeMovieService';
import Pagination from './common/paginantion';
class Movies extends React.Component {
    state={
        movies:getMovies(),
        pagesize:4
    };

    // Handling Delete
    handleDelete = (movie)=>{
        //contain all movie except clicked movies
        const movies =this.state.movies.filter(m => m._id !== movie._id);
        //in modern js if key==value so
        //Also this.setState({movies:movies})
        this.setState({movies});
    };
    handlelike= (movie) => {
        console.log(movie);
        //Clone
        const movies=[...this.state.movies];
        const index= movies.indexOf(movie);
        //copying all properties
        movies[index]={...movies[index]};
        //it returns T if F else  true 
        movies[index].liked=!movies[index].liked;
        this.setState({movies});
    };
    handlepagechange =(page)=>{
        console.log(page);
    }
    render() { 
        const{ length :count}=this.state.movies;
        if(count ===0)
        return <p>There are no movies in Database</p>
       
        
        return (
<React.Fragment>
<p>Showing {count} movies in database.</p>
{/* //table.table>thead>tr>th*4 --gen coding */}
<table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    {/* empty for delete */}
                    <th></th> 
                    {/* For LIke component */}
                    <th></th> 
                </tr>
            </thead>
            <tbody>
                {this.state.movies.map(movie =>  
                     <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                        <Like liked={movie.liked} onClick={() => this.handlelike(movie)}/>
                    </td>
                     
                    {/* Deletion */}
                    <td><button onClick={() =>this.handleDelete (movie)} className="btn btn-danger btn-sm">Delete</button></td>
                </tr>)}
             
            </tbody>
        </table>
{/* //Pagination 

this.state.movies.length
*/}

<Pagination itemscount={count} pagesize={this.state.pagesize} onPagechange={this.handlepagechange} />
</React.Fragment>
        );
    }
}
 
export default Movies ;
import React, { Component } from 'react';
import Like  from './common/like';
import Listgroup from './common/listgroup';
import { getMovies} from '../services/fakeMovieService';
import { genres, getGenres } from '../services/fakeGenreService';
import Pagination from './common/paginantion';
import {paginate} from '../utils/paginate';
class Movies extends React.Component {
    state={
        movies:[],
        genres:[],
        currentpage:1,
        pagesize:4
    };
    componentDidMount(){
       this.setState({movies:getMovies(),genres:getGenres()}) ;

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
    handlepagechange = page =>{
        //Rendering page
        this.setState({currentpage : page});
    }
    handlegenreselect = genre =>{
        this.setState({selectedgenre:genre});
    }
    render() { 
        const{ length :count}=this.state.movies;
        const{pagesize,currentpage,selectedgenre,movies : allmovies}=this.state;
        if(count ===0)
        return <p>There are no movies in Database</p>
        //if selected genre
        //filter acc to db.genre.id=== screenclick.genre.id
        //else display all movies

      const filtered =selectedgenre ? allmovies.filter(m =>m.genre._id ===selectedgenre._id) : allmovies;

     //const movies=paginate(allmovies,currentpage,pagesize);
     //filtereation
     const movies=paginate(filtered,currentpage,pagesize);  
        return (
            //Making left and right columns
<div className="row"> 
<div className="col-3">

    <Listgroup items={this.state.genres}
    // textProperty="name"
    // valueProperty="_id"
    //FOR ACTIVE CLASS SELECTED GENRE
    selecteditem={this.state.selectedgenre}
     onitemSelect={this.handlegenreselect}
     />
</div>
<div className="col"> 
<p>Showing {filtered.length} movies in database.</p>
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
                {movies.map(movie =>  
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
{/* itemscount={count} */}
<Pagination 
itemscount={filtered.length}
 pagesize={pagesize} 
 currentpage={currentpage}
 onPagechange={this.handlepagechange}

 />


</div>

</div>
        );
    }
}
 
export default Movies ;

//Paaing props from movies to pagination
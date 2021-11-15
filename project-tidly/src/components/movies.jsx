import React, { Component } from 'react';
import MoviesTable from './moviestable';
import Listgroup from './common/listgroup';
import { getMovies} from '../services/fakeMovieService';
import { genres, getGenres } from '../services/fakeGenreService';
import Pagination from './common/paginantion';
import {paginate} from '../utils/paginate';
import _ from 'lodash';
class Movies extends React.Component {
    state={
        movies:[],
        genres:[],
        currentpage:1,
        pagesize:4,
    sortColumn: {path:'title', order:'asc'}
    };
    componentDidMount(){
        //all genres spreading data from func
        //paass empty propo b/cc undefine
        const genres=[{ _id:"",name:'All Genres'},...getGenres()]
    //    this.setState({movies:getMovies(),genres:getGenres()}) ;
    this.setState({movies:getMovies(),genres}) ;

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
        //when ever we select genre we should reset the pge to one
        this.setState({selectedgenre:genre,currentpage:1 });
    }
    handleSort = sortColumn =>{
      
       this.setState({sortColumn});
    }
    render() { 
        const{ length :count}=this.state.movies;

        const{pagesize,currentpage,
            sortColumn,
            selectedgenre,movies : allmovies}=this.state;


        if(count ===0)
        return <p>There are no movies in Database</p>
        //if selected genre
        //filter acc to db.genre.id=== screenclick.genre.id
        //else display all movies
//For fixing all genres selectedgenre._id if both true ..else get all movies
      const filtered =selectedgenre && selectedgenre._id
      ? allmovies.filter(m =>m.genre._id ===selectedgenre._id) 
      : allmovies;

//Sorting
//1st arg- input
//2nd arg- array of properties

const sorted=_.orderBy(filtered ,[sortColumn.path],[sortColumn.order]);

     //const movies=paginate(allmovies,currentpage,pagesize);
     //filtereation
     const movies=paginate(sorted,currentpage,pagesize);  
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
<MoviesTable 
movies={ movies} 
sortColumn={sortColumn}
onLike={this.handlelike} 
onDelete={this.handleDelete}
onSort={this.handleSort}
/>
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
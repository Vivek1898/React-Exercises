import React, { Component } from 'react';
import MoviesTable from './moviestable';
import Listgroup from './common/listgroup';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { deleteMovie, getMovies} from '../services/movieService';
import { genres, getGenres } from '../services/genreSrevice';
import Pagination from './common/paginantion';
import {paginate} from '../utils/paginate';
import _ from 'lodash';
import SearchBox from './searchBox';
class Movies extends React.Component {
    state={
        movies:[],
        genres:[],
        currentpage:1,
        searchQuery:"",
        selectedgenre:null,
        pagesize:4,
    sortColumn: {path:'title', order:'asc'}
    };
    async componentDidMount(){
        //all genres spreading data from func
        //paass empty propo b/cc undefine
        const{data}= await getGenres();
        const genres=[{ _id:"",name:'All Genres'},...data]
    //    this.setState({movies:getMovies(),genres:getGenres()}) ;
     const {data : movies}=await getMovies()

    this.setState({movies,genres}) ;

    };

    // Handling Delete
    handleDelete = async movie =>{
        const orignalMovies=this.state.movies;
        //contain all movie except clicked movies
        const movies =orignalMovies.filter(m => m._id !== movie._id);
        //in modern js if key==value so
        //Also this.setState({movies:movies})
        this.setState({movies});

        try {
            await deleteMovie(movie._id);
        }
        catch(ex){
            if(ex.response && ex.response.status === 404)
            toast.error("Movie already been deleted");
          
            
            this.setState({movies : orignalMovies});
        }
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
        this.setState({selectedgenre:genre,searchQuery :"",currentpage:1 });
    }
    handleSearch =query =>{
        this.setState({searchQuery :query,selectedgenre:null,currentpage:1})
    };
    handleSort = sortColumn =>{
      
       this.setState({sortColumn});
    };



    getPagedData =()=>{
        //if selected genre
        //filter acc to db.genre.id=== screenclick.genre.id
        //else display all movies
//For fixing all genres selectedgenre._id if both true ..else get all movies
const{pagesize,
    currentpage,
    sortColumn,
    selectedgenre,
    searchQuery,
    movies : allMovies
}=this.state;
let filtered=allMovies;
if (searchQuery)
filtered = allMovies.filter(m =>
  m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
);
else if (selectedgenre && selectedgenre._id)
filtered = allMovies.filter(m => m.genre._id === selectedgenre._id);
// const filtered =selectedgenre && selectedgenre._id
// ? allmovies.filter() 
// : allmovies;

//Sorting
//1st arg- input
//2nd arg- array of properties

const sorted=_.orderBy(filtered ,[sortColumn.path],[sortColumn.order]);

//const movies=paginate(allmovies,currentpage,pagesize);
//filtereation
const movies=paginate(sorted,currentpage,pagesize); 
return {totalCount : filtered.length,data:movies};

    };




    render() { 
        const{ length :count}=this.state.movies;

        const{pagesize,currentpage,sortColumn,searchQuery}=this.state;


        if(count ===0)
        return <p>There are no movies in Database</p>
 const {totalCount,data :movies}= this.getPagedData();
        return (
            //Making left and right columns
<div className="row"> 
<div className="col-3">

    <Listgroup 
    items={this.state.genres}
    // textProperty="name"
    // valueProperty="_id"
    //FOR ACTIVE CLASS SELECTED GENRE
    selecteditem={this.state.selectedgenre}
     onitemSelect={this.handlegenreselect}
     />
</div>
<div className="col"> 
<Link
to="/movies/new"
className="btn btn-primary"
style={{marginBottom:20}}
>

New Movie
</Link>



<p>Showing {totalCount} movies in database.</p>
{/* //table.table>thead>tr>th*4 --gen coding */}

<SearchBox value={searchQuery} onChange={this.handleSearch}/>
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
itemscount={totalCount}
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
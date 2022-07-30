import MovieCard from './MovieCard'
import styles from './MoviesList.module.css'
import {Link} from "react-router-dom"
import { useEffect, useState } from 'react'
import HttpGet from '../../services/HttpGet'
import HttpSearch from '../../services/HttpSearch'

const MoviesList = (props) => {
    const [movies, setMovies] = useState([])
    //console.log(props.moviesSearch);
    const selector = props.moviesSearch !== "" ? HttpSearch(props.moviesSearch) : HttpGet('/discover/movie')
    useEffect(()=> {
        selector
        .then((data) => {
            setMovies(data.results)
        });
    },[props]);
    //console.log(movies);
    return (
        <main className={styles.main}>
            <h1 className={styles.h1}>Movies List</h1>
            <ul className={styles.listContainer}>
                {movies.map((movie)=>{
                    return (
                        <Link className={styles.link} to={`/movie/${movie.id}`} key={movie.id}>
                            <MovieCard  movie={movie}/>
                        </Link>
                    )})}
            </ul>
        </main>
    )
}

export default MoviesList;
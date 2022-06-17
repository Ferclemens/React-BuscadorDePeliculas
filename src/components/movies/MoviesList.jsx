import MovieCard from './MovieCard'
import styles from './MoviesList.module.css'
import {Link} from "react-router-dom"
import { useEffect, useState } from 'react'
import HttpGet from '../../services/HttpGet'
import apiKEY from '../../services/HttpGet'

const MoviesList = () => {
    const [movies, setMovies] = useState([])
    
    useEffect(()=> {
        HttpGet('/discover/movie')
        .then((data) => {
            setMovies(data.results)
        });
    },[]);
    
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
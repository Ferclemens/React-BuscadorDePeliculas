import MovieCard from './MovieCard'
import styles from './MoviesList.module.css'
import {Link} from "react-router-dom"

const MoviesList = (movies) => {
    //console.log(movies.data);
    return (
        <main className={styles.main}>
            <h1 className={styles.h1}>Tendence Movies</h1>
            <ul className={styles.listContainer}>
                {(movies.data).map((movie)=>{
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
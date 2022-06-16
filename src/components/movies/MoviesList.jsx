import movies from '../../movies.json'
import MovieCard from './MovieCard'
import styles from './MoviesList.module.css'

const MoviesList = () => {
    return (
        <main className={styles.main}>
            <h1 className={styles.h1}>Movies List</h1>
            <ul className={styles.listContainer}>
                {movies.map((movie)=>{
                    return <MovieCard key={movie.id} movie={movie}/>
                })}
            </ul>
        </main>
    )
}

export default MoviesList;
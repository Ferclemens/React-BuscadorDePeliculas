import styles from './MovieCard.module.css'


const MovieCard = ({movie}) => {
    const imageURL = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
    return (
        <li className={styles.cardContainer}>
            <img className={styles.image} src={imageURL} alt={movie.title}></img>
            <div className={styles.tittle}>{movie.title}</div>
        </li>
    )
}

export default MovieCard;
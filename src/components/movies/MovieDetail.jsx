import styles from './MovieDetail.module.css'
import {useParams} from "react-router-dom"
import { useEffect, useState } from 'react';
import HttpGet from '../../services/HttpGet';

const MovieDetail = () => {
    const {movieId} = useParams();
    const [movie, setMovie] = useState(null)

    useEffect(()=> {
        HttpGet(`/movie/${movieId}`)
        .then((data) => {
            setMovie(data);
        });
    },[movieId]);
    //console.log(movie);
    if(!movie){
        return null;
    }
    //damos tamaño de imagen - predefinido por API
    const imageURL="https://image.tmdb.org/t/p/w500"
    return (
        <div className={styles.detailContainer}>
            <img className={`${styles.image} ${styles.col}`} src={`${imageURL}${movie.poster_path}`} alt={movie.title}></img>
            <div className={`${styles.detail} ${styles.col}`}>
                <p><strong>Title:</strong> {movie.title}</p>
                <p><strong>Genres:</strong> {movie.genres.map((genre) => genre.name).join(", ")}</p>
                <p><strong>Description:</strong> {movie.overview}</p>
                <p><strong>Release Date:</strong> {movie.release_date}</p>
            </div>
        </div>
    )
}

export default MovieDetail;
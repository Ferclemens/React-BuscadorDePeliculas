import React, { useEffect, useState } from 'react'
import MoviesList from '../components/movies/MoviesList'
import styles from '../services/Buscador.module.css'
import HttpGet from './HttpGet'
import HttpSearch from './HttpSearch'


function Buscador() {
    const [text, setText] = useState('')
    const [search, setSearch] = useState('')
    const [movies, setMovies] = useState([])

    const onTextChange = (e) => {
        setText(e.target.value)
    }
    const onSearch = (e) => {
        e.preventDefault()
        setSearch(text)
    }
    useEffect( ()=> {
        const fetchData = async (search) => {
            const data = search ? await HttpSearch(search) : await HttpGet('/discover/movie')
            setMovies(data.results)
        }
        fetchData(search)
    },[search]);
    //console.log(search);
    //console.log(movies);
  return (
    <>
        <form className={styles.form} onSubmit={onSearch}>
        <input className={styles.input} type='text' placeholder='buscar pelicula' value={text} onChange={onTextChange}></input>
        <button className={styles.button}type='submit'>Buscar</button>
        </form>
        <div>
            <MoviesList data={movies} />
        </div>
    </>
  )
}

export default Buscador
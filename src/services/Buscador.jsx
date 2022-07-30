import React, { useEffect, useState } from 'react'
import MoviesList from '../components/movies/MoviesList'


function Buscador() {
    const [text, setText] = useState('')
    const [search, setSearch] = useState('')

    const onTextChange = (e) => {
        setText(e.target.value)
    }
    const onSearch = (e) => {
        e.preventDefault()
        setSearch(text)
    }
    //console.log(search);

  return (
    <>
        <form onSubmit={onSearch}>
        <input type='text' placeholder='buscar pelicula' value={text} onChange={onTextChange}></input>
        <button type='submit'>Buscar</button>
        </form>
        <div>
            <MoviesList moviesSearch={search} />
        </div>
    </>
  )
}

export default Buscador
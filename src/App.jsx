import './App.css';
import {BrowserRouter, Routes, Route,} from "react-router-dom"
import MoviesList from './components/movies/MoviesList'
import MovieDetail from './components/movies/MovieDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element="HoME"/>
        <Route path="movies" element={<MoviesList/>}/>
        <Route path="/movie/:movieId" element={<MovieDetail/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App;

import './App.css';
import {BrowserRouter, Routes, Route,} from "react-router-dom"
import MoviesList from './components/movies/MoviesList'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element="HoME"/>
        <Route path="peliculas" element={<MoviesList/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App;

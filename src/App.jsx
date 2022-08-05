import './App.css';
import {BrowserRouter, Routes, Route,} from "react-router-dom"
import MovieDetail from './components/movies/MovieDetail';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<LandingPage/>}/>
        <Route path="movies" element={<LandingPage/>}/>
        <Route path="/movie/:movieId" element={<MovieDetail/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App;

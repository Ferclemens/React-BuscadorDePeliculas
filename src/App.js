import './App.css';
import {BrowserRouter, Routes, Route,} from "react-router-dom"
import BuscarPeliculasPagina from './paginas/BuscarPeliculasPagina';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="buscador" element={<BuscarPeliculasPagina/>}/>
        <Route path="" element="HoME"/>
      </Routes>
    </BrowserRouter>
  )
}
export default App;

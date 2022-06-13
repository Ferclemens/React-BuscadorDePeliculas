import BotonBuscar from '../componentes/BotonBuscar'
import Input from '../componentes/Input'
import ListaPeliculas from '../componentes/ListaPeliculas'
import Loading from '../componentes/Loading'
import Paginado from '../componentes/Paginado'
import './BuscarPeliculasPagina.css'

export default function BuscarPeliculasPagina() {
    return (
        <main className='pagina--container'>
            <div className='buscador--container'>
                <Input />
                <BotonBuscar />
            </div>
            <div className='listaPeliculas--container'>
                <ListaPeliculas />
            </div>
            <div className='paginado--container'>
                <Paginado />
                <Loading />
            </div>
        </main>
    )
}
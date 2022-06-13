import Stack from '@mui/material/Stack'
import Pagination from '@mui/material/Pagination';
import './paginado.css'

export default function Paginado() {
    return (
        <Stack spacing={2} className="paginado">
            <Pagination shape="rounded" count={10} page='' onChange=''/>
        </Stack>
    );
}
import {pageURL,apiKEY} from './const'

const HttpSearch = (query) =>{
    const data = fetch(`${pageURL}/search/movie?api_key=${apiKEY}&language=en-US&query=${query}&page=1&include_adult=false`)
    .then((result) => result.json())
    return (
        data
    )}
    
    export default HttpSearch;
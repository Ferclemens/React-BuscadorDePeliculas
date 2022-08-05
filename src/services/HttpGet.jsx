import {pageURL,apiKEY} from './const'

const HttpGet = async(url) =>{
    const data = await fetch(`${pageURL}${url}?api_key=${apiKEY}`)
    .then((result) => result.json())
    //console.log(data);
    return (
        data
    )}
    
    export default HttpGet;
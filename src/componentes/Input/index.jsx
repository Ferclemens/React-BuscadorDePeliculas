import { useState } from 'react';
import './input.css'

export default function Input() {
    const [texto, setTexto] = useState('');
    
    function onChangeText(event) {
        const {value} = event.target
        setTexto(value)
    }
    return (
        <input 
            className="input--box" 
            placeholder="Titulo pelicula" 
            value={texto}
            onChange={onChangeText}  
         >
        </input>
    )
}
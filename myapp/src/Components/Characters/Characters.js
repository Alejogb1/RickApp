// Componente de lógica y map


import {useState, useEffect} from 'react'
import Character from "./Character"
import {Row} from "react-bootstrap"
const Characters = () => {
        const BASE_URL = "https://rickandmortyapi.com/api";
        const [characters, setCharacters] = useState([])    
        const [fetching, setFetch] = useState(true)    
        const [error, setError] = useState(false) 
        const getCharacters = async (endpoint) => {
            try {
                const result = await fetch (`${BASE_URL}/${endpoint}`)
                const data = await result.json();
                setCharacters(data.results) // array de personajes
                setFetch(false)
            } catch (e) {
                setError(true)
                setFetch(false)
                setCharacters([])
            }
    
       }
    useEffect(() => {
      getCharacters("character")
    }, [])
    
    return (
        <Row>
            { fetching // si fetching es true..
            ? <h3>Cargando...</h3>
            : characters.map((character) => {
                <Character key={character.id} {...character} /* Descompongo los valores *//> 
            })      // characters es el array de objetos    
            }
        </Row>
    )
}
export default Characters;


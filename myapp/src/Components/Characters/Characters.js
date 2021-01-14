// Componente de lógica y map


import {useState, useEffect} from 'react'
import Character from "./Character"
const Characters = () => {
    const BASE_URL = "https://rickandmortyapi.com/api/";
        [characters, setCharacters] = useState([])    
        const getCharacters = async (endpoint) => {
        const result = await fetch (`${BASE_URL}`, `${endpoint}`)
        const data = await result.json 
       }
    useEffect(() => {
      getCharacters("character")
    }, [])
    
    return (
        <>
            <Character key={character.id}/>
        </>
    )
}



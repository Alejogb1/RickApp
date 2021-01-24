// Componente de lógica y map


import {useState, useEffect} from 'react'
import Character from "./Character"
import {Row} from "react-bootstrap"
const Characters = () => {
        const BASE_URL = "https://rickandmortyapi.com/api";

    
    return (
        <Row>
            <h1>Hola</h1>
            { 
            fetching // si fetching es true..
            ? <h3>Cargando...</h3>
            : characters.map((character) => (
                <Character key={character.id} {...character} /* Descompongo los valores *//> 
            ))      // characters es el array de objetos    
            }
        </Row>
    )
}
export default Characters;


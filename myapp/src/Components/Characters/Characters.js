// Componente de lógica y map

import Character from "./Character"
import {Row} from "react-bootstrap"
import { useFetch } from "../../customHooks/useFetch"
const Characters = () => {
    const [data, fetching, error] = useFetch("character") // No es necesario tener el mismo nombre 
    const {info, results : characters} = data; // Necesito desestructurar. Al results lo nombro como characters
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


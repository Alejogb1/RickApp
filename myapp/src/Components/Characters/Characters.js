// Componente de lógica y map
import {useState, useEffect} from "react"
import Character from "./Character"
import {Row} from "react-bootstrap"
import { useFetch } from "../../customHooks/useFetch"
import Paginate from '../Common/Paginate'
const BASE_ENDPOINT = "character"
const Characters = ({search}) => {
    
    const [url, setUrl] = useState(BASE_ENDPOINT)
    const [data, fetching] = useFetch(url) // Custom hook. El url es el nuevo estado hecho por el paginate 
    const {info, results : characters} = data; // Necesito desestructurar. Al results lo nombro como characters
    
    useEffect(() => {
        const newUrl = !search ? BASE_ENDPOINT : `${BASE_ENDPOINT}?name=${search}`
        setUrl(newUrl)
    }, [search])

    const handlePages = (newUrl) => {
        setUrl(`${BASE_ENDPOINT}?${newUrl}`)
    }
    
    return (
        <>
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
        <Paginate {...info} handlePages={handlePages}/>
        </>
      
    )
}
export default Characters;


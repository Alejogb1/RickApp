import { Form, Row, Col } from "react-bootstrap"
import {useState} from "react"
const Search = ({handlerSearch}) => {
    const [characters, setCharacters] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (characters.trim() === "") return //Terminamos la funcion si esta vacio
        handlerSearch(characters)
    }
    const handlerInput = (e) => {
        setCharacters(e.target.value) // Valor de busqueda
    }
    return (
        <Row className="justify-content-center">
            <Col>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                            <Form.Control
                            type="text"
                            placeholder="Buscar por nombre"
                            onChange={handlerInput}
                            >

                            </Form.Control>
                    </Form.Group>
                </Form>
            </Col>   
        </Row>
    )
    
}
export default Search
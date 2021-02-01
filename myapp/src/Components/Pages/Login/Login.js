import {Row, Col, Form, Button} from "react-bootstrap"
import {useForm} from "react-hook-form"
import {schema} from "./schema"
import { yupResolver } from "@hookform/resolvers"
const Login = () =>  {
 // No se accede por vector, sino que por nombre
    const {register, handleSubmit, errors} = useForm({ 
        resolver: yupResolver(schema),
    });    
    const submitForm = (data) => {
        console.log(data) // Tengo data, en vez de e.target.value
        usePost(data)
    }
    const usePost = () => {

    }
    return (
        <>
            <Row className="justify-content-center vh-100 align-items-center m-0 p-0">
            <Col md={3} sm={12}>
                <Form onSubmit={handleSubmit(submitForm)}> 
                <Form.Group>
                    <Form.Control
                    type="text"
                    name="username"
                    ref={register} // Sirve para tener este input en cuenta
                    />
                    {erros.mail && (
                    <label className="text-danger">{errors.mail.message}</label>
                    )}
                </Form.Group>
                <Form.Group>
                    <Form.Control
                    type="password"
 // Sirve para tener este input en cuenta
                    name="password"
                    
                    placeholder="password"
                    />
                </Form.Group>
                <Button type="submit" variant="dark" className="mt-3 w-100">
                    Ingresar
                </Button>
                </Form>
            </Col>
            </Row>
        </>
    )
}

export default Login
import {Row, Col, Form, Button} from "react-bootstrap"
import {useForm} from "react-hook-form"
const Login = () =>  {

    const {register, handleSubmit, errors} = useForm();     // No se accede por vector, sino que por nombre

    return (
        <>
            <Row className="justify-content-center vh-100 align-items-center m-0 p-0">
            <Col md={3} sm={12}>
                <Form >
                <Form.Group>
                    <Form.Control
                    type="text"
                    name="username"
                    />
                    <label className="text-danger"></label>
                </Form.Group>
                <Form.Group>
                    <Form.Control
                    type="password"
            
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
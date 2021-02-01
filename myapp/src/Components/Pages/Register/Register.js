import {schema} from "./schema"


const Register = () =>  {
    return (
        <>
        <Row className="justify-content-center vh-100 align-items-center m-0 p-0">
        <Col md={3} sm={12}>
            <Form onSubmit={handleSubmit(submitForm)}> 
            <Form.Group>
                <Form.Control
                type="text"
                name="firstName"
                ref={register} // Sirve para tener este input en cuenta
                />
                {errors.mail && (
                <label className="text-danger">{errors.name.message}</label>
                )}
            </Form.Group>
            <Form.Group>
                <Form.Control
                type="text"
                name="lastName"
                ref={register} // Sirve para tener este input en cuenta
                />
                {errors.mail && (
                <label className="text-danger">{errors.name.message}</label>
                )}
            </Form.Group>
            <Form.Group>
                <Form.Control
                type="text"
                name="mail"
                ref={register} // Sirve para tener este input en cuenta
                />
                {errors.mail && (
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

export default Register
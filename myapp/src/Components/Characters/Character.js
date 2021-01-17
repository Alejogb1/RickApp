import React from 'react'
import {Col, Card} from "react-bootstrap"
export default function Character({name, image, gender}) {
    return (
        /*  */
        <Col md={4}>
            <Card>
                <h4>{name}</h4>
            </Card>
            <Card.Image variant="ontop" src={image}></Card.Image>
        </Col>
    )
}

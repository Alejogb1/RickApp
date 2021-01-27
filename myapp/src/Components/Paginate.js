import {Row, Col, Pagination} from "react-bootstrap"

const Paginate = ({prev, next, handlePages}) => {
    const handleNext = () => { 
        const [_, query] = next.split("?")
        handlePages(query)
    }
    return (
    <Row>
        <Col>
            <Pagination>
                {!!prev && <Pagination.Prev/>} 
                <Pagination.Next onClick={handleNext}/>
            </Pagination>
        </Col>  
    </Row>
    ) 
}

export default Paginate
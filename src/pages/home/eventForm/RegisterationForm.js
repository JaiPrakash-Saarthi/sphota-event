import { Container,Row,Col,Button,Form, } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';



import "./RegisterationForm.css"
const RegisterationForm = () => {
    return(
        <>
        <Container>
            <Row>
                <Col>
                <h3>
                    Register Now
                </h3>
                </Col>
            </Row>
        <Row>
            <Col>
                        <Form>
            <fieldset >
                <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Full Name *" required/>
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Email *" required/>
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Control type="phone" placeholder="Phone No *" required/>
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Company *" required/>
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Job Title *" required/>
                </Form.Group>
                <Button type="submit">Submit</Button>
            </fieldset>
            </Form>

            </Col>
        </Row>
        </Container>
        </>
    )
}

export default RegisterationForm;
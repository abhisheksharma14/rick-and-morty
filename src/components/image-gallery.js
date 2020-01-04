import React, { Component } from 'react';
import { Container, Row, Col, Image, Button, Alert } from 'react-bootstrap';
class Gallery extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Container style={{ marginTop:"20px" }} >
                <Row>
                { this.props.images.map((img, idx) =>
                    <Col xs={5} md={3} offset={1} key={idx}>
                        <Image src={img.url} rounded style={{maxWidth:"100%", maxHeight: "300px"}}/>
                    </Col>
                )}
                </Row>
                {!this.props.images || !this.props.images.length ? (
                    <Alert variant={"info"}>No images</Alert>
                ):(
                    <Button>Load More</Button>
                )}
            </Container>
        );
    }
}

export { Gallery };
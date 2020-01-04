import React, { Component } from 'react';
import { Container, Row, Col, Image, Button, Alert, Card } from 'react-bootstrap';
class Gallery extends Component {
    constructor(props){
        super(props);
        this.state = {
            offset : 1
        }
        this.loadNextPage = this.loadNextPage.bind(this);
        this.loadPrevPage = this.loadPrevPage.bind(this);
    }

    loadNextPage(){
        this.props.loadMore(this.state.offset+1);
        this.setState({offset:this.state.offset+1})
    }

    loadPrevPage(){
        this.props.loadMore(this.state.offset-1);
        this.setState({offset:this.state.offset-1})
    }

    render() {
        return (
            <Container style={{ marginTop:"20px" }} >
                <Row>
                { this.props.characters.map((chr, idx) =>
                    <Col xs={5} md={3} offset={2} key={idx}>
                        <Card style={{minHeight:"300px", marginTop:"10px"}}>
                            <Card.Img variant="top" src={chr.image} style={{maxWidth:"100%", maxHeight: "300px"}}/>
                            <Card.Body>
                                <Card.Title>{chr.name}</Card.Title>
                                <Card.Text>
                                    Species : {chr.species}<br />
                                    Status : {chr.status}<br />
                                    Gender : {chr.gender}<br />
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </Col>
                )}
                </Row>
                {!this.props.characters || !this.props.characters.length ? (
                    <React.Fragment>
                        <Alert variant={"info"}>No characters</Alert>
                        <Button onClick={this.loadPrevPage}>Prev</Button>
                    </React.Fragment>
                ):(
                    <React.Fragment>
                        <Button onClick={this.loadPrevPage}>Prev</Button>
                        <Button onClick={this.loadNextPage}>Next</Button>
                    </React.Fragment>
                )}
            </Container>
        );
    }
}

export { Gallery };
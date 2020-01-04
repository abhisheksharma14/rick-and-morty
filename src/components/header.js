// basic react component starting template
import React, { Component } from 'react';
import { Navbar,Form } from 'react-bootstrap';
class Header extends Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Rick And Morty Characters</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Form inline>
                    {/* <Button variant="outline-success">Search</Button> */}
                </Form>
            </Navbar.Collapse>
            </Navbar>
        );
    }
}

export { Header };
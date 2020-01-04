// basic react component starting template
import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button  } from 'react-bootstrap';
class Header extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.search = this.search.bind(this);
        this.state = {
            keyword: ""
        }
    }

    handleChange(e) {
        var value = e.target.value;
        this.setState({keyword: value});
    }

    search(e){
        
        this.props.searchGif(this.state.keyword);
    }

    render() {
        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Giphy Search</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" value={this.state.keyword} onChange={(e) => this.handleChange(e)}/>
                    <Button variant="outline-success" onClick={(e) => this.search(e)}>Search</Button>
                </Form>
            </Navbar.Collapse>
            </Navbar>
        );
    }
}

export { Header };
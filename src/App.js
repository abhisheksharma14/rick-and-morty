import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { fetchCharacters } from './actions';
import { Header, Gallery } from './components';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      characters: [
        {
          "id": 1,
          "name": "Rick Sanchez",
          "status": "Alive",
          "species": "Human",
          "type": "",
          "gender": "Male",
          "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
          "url": "https://rickandmortyapi.com/api/character/1",
        },
      ],
      offset: 1
    }
  }

  componentDidMount(){
    this.props.fetchCharacters();
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      characters:nextProps.characters
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Gallery characters={this.state.characters} loadMore={this.props.fetchCharacters} />
      </div>
    );
  }
}

// function to convert the global state obtained from redux to local props
function mapStateToProps(state) {
  return {
    characters: state.default && state.default.characters || []
  };
}

export default connect(mapStateToProps, { fetchCharacters })(App);

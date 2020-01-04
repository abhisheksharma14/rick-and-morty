import React from 'react';
import "./Header.css"

class Header extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <header>
                <hgroup>
                    <h1>Rick &amp; Morty</h1>
                </hgroup>
            </header>    
        )
        
    }
}

export { Header }
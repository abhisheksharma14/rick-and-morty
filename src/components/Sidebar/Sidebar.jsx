import React from 'react';
import "./Sidebar.css"

class Sidebar extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <aside>
                <section>
                    <h1>Filters</h1>
                    <ul>
                        <li>Link 1</li>
                        <li>Link 2</li>
                    </ul>
                </section>
            </aside>    
        )
        
    }
}

export { Sidebar }
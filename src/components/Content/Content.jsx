import React from 'react';
import "./Content.css"

class Content extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <section>
                <article>
                    <header>
                        <h1>Article #1</h1>
                    </header>
                    <section>
                        This is the first article.
                    </section>
                </article>
                <article>
                    <header>
                        <h1>Article #2</h1>
                    </header>
                    <section>
                        This is the second article.
                    </section>
                </article>
            </section>    
        )
        
    }
}

export { Content }
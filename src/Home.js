import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
            <div>
                <h2>HELLO</h2>
                <p>This is a dummy server used to create random coordinates [x,y] to be consumed, stored and displayed
                by the java target application. The workflow of this application is react frontend -> node js API ->
                    java FX application
                </p>
            </div>
        );
    }
}

export default Home;
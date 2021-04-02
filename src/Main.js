import styled from 'styled-components'
import React, {Component} from "react";
import {
    Route,
    NavLink,
    HashRouter
}
from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";

const ButtonGroup = styled.div`
  display: flex;
`

const Button = styled.button`
  position: absolute;
  bottom: 300px;
  left: 100px;
  height: 80px;
  width: 100px;
  border-radius: 5px;
  outline: 0;
  box-shadow: 0px 2px 2px lightgray;
  cursor: pointer;
  transition: ease background-color 250ms;

  &:hover{
    background-color: gray;
  }
`

const Button1 = styled.button`
  position: absolute;
  bottom: 300px;
  left: 300px;
  height: 80px;
  width: 100px;
  border-radius: 5px;
  outline: 0;
  box-shadow: 0px 2px 2px lightgray;
  cursor: pointer;
  transition: ease background-color 250ms;

  &:hover{
    background-color: gray;
  }
`

let timer = null;

class Main extends Component  {

    render() {

        return (
            <HashRouter>
                <div>
                    <h1>Target Application Server</h1>
                    <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    <div className="content">
                        <div className="content">
                            <Route exact path="/" component={Home}/>
                            <Route path="/contact" component={Contact}/>
                        </div>
                    </div>
                </div>
                <ButtonGroup>
                    <Button onClick={handleSubmit}>
                        Start Generating
                    </Button>
                    <Button1 onClick={handleCancellation}>
                        Stop Generating
                    </Button1>
                </ButtonGroup>
            </HashRouter>
        );
    }
}

function  handleSubmit() {

        var rand = Math.round(Math.random() * (3000 - 1000)) + 1000;
        const min = 5;
        const max = 395;
        const x = min + (Math.random() * (max - min));
        const y = min + (Math.random() * (max - min));

     fetch('/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({xCoordinate: x | 0, yCoordinate: y | 0}),
        }).then(response => {response.json().then(json => {if (json.stop){handleCancellation()}})});

    timer = setTimeout(handleSubmit, rand);

}

function handleCancellation() {
    clearTimeout(timer);
}

export default Main;
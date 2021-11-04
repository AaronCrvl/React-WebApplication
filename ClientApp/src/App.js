import React, { Component } from 'react';
import { ScrollView } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { Route } from 'react-router';
import { LeftBlock } from './components/LeftBlock';
import { RightBlock } from './components/RightBlock';
import '../src/components/Css/App.css';

export default class App extends Component {
    displayName = App.name

    constructor() {
        super();
        this.state = { Logged: false }
    }

    changeVisual = (CanChange) => {
        this.setState({ Logged: CanChange });
    }

    render() {        

        return (
            <div class="row">
                <div class="col" id="colLeft">
                    <LeftBlock></LeftBlock>
                </div>
                <div class="col" id="colRight">
                    <RightBlock></RightBlock>
                </div>
            </div>
        );
    }
}

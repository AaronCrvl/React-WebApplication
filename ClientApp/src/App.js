import React, { Component } from 'react';
import { Route } from 'react-router';
import { LeftBlock } from './components/LeftBlock';
import { RightBlock } from './components/RightBlock';
import '../src/components/Css/App.css';

export default class App extends Component {
    displayName = App.name    

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

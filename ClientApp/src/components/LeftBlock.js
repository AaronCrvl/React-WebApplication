import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './Css/LeftBlock.css';


export class LeftBlock extends Component {
    displayName = LeftBlock.name
    render() {
        return (
            <div id="LeftBlock">                
                <div id="InsideBlock">   
                    <h2>Atomic Network</h2>
                    <div id="ButtonArea">
                        <button type="button" class="btn btn-secondary">Get New Account!</button>
                    </div>
                </div>                
            </div>
        );
    }
}
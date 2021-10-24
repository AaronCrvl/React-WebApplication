import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Css/RightBlock.css';

function CallApi() {
    fetch('https://myapi.com?name=hello?password=teste', { method: 'GET' })
        .then(data => data.json()) // Parsing the data into a JavaScript object
        .then(json => alert(JSON.stringify(json))) // Displaying the stringified data in an alert popup
}

export class RightBlock extends Component {    
    displayName = RightBlock.name

    render() {
        return (
            <div id="RightBlock">
                <div id="MainRightBlock">
                    <h1>Welcome back,</h1>
                    <div id="UserGrid">
                        <div id="UsernamePassword">
                            <label class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"></span>
                                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                            </label>
                            <label class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"></span>
                                <input type="text" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"></input>
                            </label>
                        </div>
                        <div id="EnterGetAccount">
                            <button type="button" class="btn btn-primary" onClick={CallApi}>Enter Atomic NetWork</button>                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../Css/LoggedFooter.css';
import axios from 'axios';

export class LoggedFooter extends Component {
    render() {
        return (
            <footer>
                <nav class="navbar navbar-light">
                    <a class="navbar-brand" href="#">
                        <img src="https://cdn0.iconfinder.com/data/icons/education-608/100/Atom-512.png" width="30" height="30" class="d-inline-block align-bottom" alt=""></img>Atomic Network</a>
                </nav>
            </footer>
        );
    }
}
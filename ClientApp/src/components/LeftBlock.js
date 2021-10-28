import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './Css/LeftBlock.css';
import axios from 'axios';

var RegistrationBlockOn = 0, RegistrationBlockOff = 0;
var StoredDataLeftBlock, StoredDataRightBlock;

function ShowRegistrationBlock() {

    if (RegistrationBlockOn == 0) {

        RegistrationBlockOn = 1;
        StoredDataLeftBlock = document.querySelector("#LeftBlock").innerHTML;
        StoredDataRightBlock = document.querySelector("#RightBlock").innerHTML;
        document.querySelector("#RightBlock").innerHTML = '<div id="RegistrationBlock"><img id="Gif" src="https://th.bing.com/th/id/R.9db7c3342965b125ad767bc0c9df16da?rik=s73wIA0zf4Fa0A&riu=http%3a%2f%2fbestanimations.com%2fScience%2fChemistry%2fchemistry-atom-proton-electron-animation-11.gif&ehk=cYsjyHJvNtHsb134tYXnYivUMI9bPQFZpl3IMUmOgvs%3d&risl=&pid=ImgRaw&r=0"></img></div>';
        return document.querySelector("#LeftBlock").innerHTML = RegistrationBlock;
    }
}

function HideRegistrationBlock() {

    if (RegistrationBlockOn == 1) {
        RegistrationBlockOn = 0;
        document.querySelector("#RightBlock").innerHTML = StoredDataRightBlock;
        document.querySelector("#LeftBlock").innerHTML = StoredDataLeftBlock;
    }
}

export class LeftBlock extends Component {
    displayName = LeftBlock.name;

    constructor(props) {
        super(props);
        this.state = {
            acct: '',
        }
    }

    componentDidMount() {
        const url = 'https://localhost:44305/api/SignIn';
        axios.get(url)
            .then(response => {
                this.setState({ acct: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const { acct } = this.state;

        return (
            <div>
                <div id="LeftBlock">
                    <div id="InsideBlock">
                        <img id="Gif" src="https://th.bing.com/th/id/R.9db7c3342965b125ad767bc0c9df16da?rik=s73wIA0zf4Fa0A&riu=http%3a%2f%2fbestanimations.com%2fScience%2fChemistry%2fchemistry-atom-proton-electron-animation-11.gif&ehk=cYsjyHJvNtHsb134tYXnYivUMI9bPQFZpl3IMUmOgvs%3d&risl=&pid=ImgRaw&r=0"></img>
                        <br></br>
                        <h2>Atomic Network</h2>
                        <div>
                        </div>
                        <br></br>
                        <p>Hi, {acct}</p>
                        <br></br>
                        <br></br>
                        <div id="ButtonArea">
                            <button type="button" class="btn btn-secondary" onClick={ShowRegistrationBlock}>Get New Account!</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

var RegistrationBlock =
    '<div>' +
    '<button type="submit" class="btn btn-primary" id="CloseButton" onClick={HideRegistrationBlock}>Close</button>' +
    '<div id="RegistrationBlock">' +
    '<h1>Enter your data!</h1>' +
    '<form class="row g-3">' +
    '<div class="col-md-6">' +
    '<label for="inputEmail4" class="form-label">Email</label>' +
    '<input type="email" class="form-control" id="inputEmail4"></input>' +
    '</div>' +
    '<div class="col-md-6">' +
    '<label for="inputPassword4" class="form-label">Password</label>' +
    '<input type="password" class="form-control" id="inputPassword4"></input>' +
    '</div>' +
    '<div class="col-12">' +
    '<label for="inputAddress" class="form-label">Address</label>' +
    '<input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>' +
    '</div>' +
    '<div class="col-12">' +
    '<label for="inputAddress2" class="form-label">Address 2</label>' +
    '<input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>' +
    '</div>' +
    '<div class="col-md-6">' +
    '<label for="inputCity" class="form-label">City</label>' +
    '<input type="text" class="form-control" id="inputCity"></input>' +
    '</div>' +
    '<div class="col-md-4">' +
    '<label for="inputState" class="form-label">State</label>' +
    '<select id="inputState" class="form-select">' +
    '<option selected>Choose...</option>' +
    '<option>...</option>' +
    '</select>' +
    '</div>' +
    //'<div class="col-md-2">' +
    //'<label for="inputZip" class="form-label">Zip</label>' +
    //'<input type="text" class="form-control" id="inputZip"></input>' +
    //'</div>' +
    '<div class="col-12">' +
    '<div class="form-check">' +
    '<input class="form-check-input" type="checkbox" id="gridCheck"></input>' +
    '<label class="form-check-label" for="gridCheck">' +
    'Check me out' +
    '</label>' +
    '</div>' +
    '</div>' +
    '<div class="col-12">' +
    '<button type="submit" class="btn btn-primary">Sign in</button>' +
    '</div>' +
    '</form>' +
    '</div >'
'</div>';
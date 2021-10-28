import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './Css/RightBlock.css';

var GotName = 0, GotPassword = 0, DataReady = 0;
var Name, Password;

function GetName() {
    SetName();
    return Name;
}

function GetPassword() {
    SetPassword();
    return Password;
}

function SetName() { Name = document.querySelector("#UsernamePassword > label:nth-child(1) > input"); }
function SetPassword() { Password = document.querySelector("#UsernamePassword > label:nth-child(2) > input"); }

function Validate() {

    GetData();
    alert(GetName());
    alert(GetPassword());
    if (GotName != 1 && GotPassword != 1) {
        alert("Please enter all fields.");
    }
    else {
        alert("Hy," + GetName() + "your data was stored!");
        DataReady = 1;
    }
}

function GetData() {

    if (GotName == 0) {
        SetName();
    }
    else { GotName = 1; }

    if (GotPassword == 0) {
        SetPassword();
    }
    else { GotPassword = 1; }
}

export class RightBlock extends Component {
    displayName = RightBlock.name;    

    render() {          

        return (
            <div id="RightBlock">
                <div id="MainRightBlock">
                    <h1>Welcome back,</h1>                    
                    <div id="UserGrid">
                        <div id="UsernamePassword">
                            <label class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"></span>
                                <input type="text" class="form-control" id="username" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                            </label>
                            <label class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"></span>
                                <input type="text" class="form-control" id="password" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"></input>
                            </label>
                        </div>
                            <div id="EnterGetAccount">
                                <button type="button" class="btn btn-primary" onClick={this.handleAdd}>Enter Atomic NetWork</button>
                            </div>
                    </div>
                </div>                
            </div>
        );
    }
}
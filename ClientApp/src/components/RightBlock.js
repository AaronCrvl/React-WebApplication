import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './Css/RightBlock.css';
import './Css/EnterPlatform.css';
import { myModal } from '../components/Modal'
import axios from 'axios';


var GotName = 0, GotPassword = 0, DataReady = 0;
var Name, Password, ReturnAccountModel;

function GetName() { SetName(); return Name; }
function GetPassword() { SetPassword(); return Password; }
function GetReturnAccountModel() { return ReturnAccountModel; }

function SetName() { Name = document.querySelector("#username").value; }
function SetPassword() { Password = document.querySelector("#password").value; }

function Refresh() {
    window.location.reload(false);
}

function GetData() {

    if (GotName == 0) {
        SetName();
        GotName = 1;
    }

    if (GotPassword == 0) {
        SetPassword();
        GotPassword = 1;
    }
}

export class RightBlock extends Component {
    displayName = RightBlock.name;

    constructor(props) {
        super(props);
        this.state = {
            SignedIn: false,
        };
    }

    Validate = () => {
        document.querySelector("#LoadingIcon").style.visibility = "visible";

        GetData();

        if (GotName != 1 && GotPassword != 1) {
            alert("Please enter all fields.");
        }
        else {
            DataReady = 1;

            const url = 'https://localhost:44305/api/SignIn/' + GetName() + '/' + GetPassword();
            axios.get(url)
                .then(response => {
                    if (response.data != 'Account not found.') {                        
                        this.setState({ SignedIn: true });
                        document.querySelector("#LoadingIcon").style.visibility = "hidden";
                    }
                    else {
                        alert('Request Failed! ' + 'Error: ' + response.data);
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }        
    }

    render() {

        if (this.state.SignedIn) {
            document.querySelector("#colLeft").remove();
            document.querySelector("#colRight").style.height = "1920px";
            document.querySelector("#colRight").style.width = "1080px";

            return (
                <div id="colRight">
                    <div id="NewBlock">                        
                        <div id="SignedInMessage">
                            <div id="Message" class="alert alert-success d-flex align-items-center" role="alert">
                                <img src="https://www.suunto.com/contentassets/0b698f770c5e423ea2336ce649e0cabe/icon-success.png" width="30px" height="30px"></img>
                                <div>You entered the platform, enjoy!</div>
                            </div>
                            <p> {GetReturnAccountModel} </p>
                            <div id="Btn">
                                <button type="button" class="btn btn-primary" onClick={Refresh}>Click to refresh WebPage</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div id="RightBlock">
                <div id="LoadingIcon"></div>
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
                                <input type="password" class="form-control" id="password" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"></input>
                            </label>
                        </div>
                        <div id="EnterGetAccount">
                            <button type="button" class="btn btn-primary" onClick={this.Validate}>Enter Atomic NetWork</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
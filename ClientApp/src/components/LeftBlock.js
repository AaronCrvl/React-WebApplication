import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './Css/LeftBlock.css';
import { myModal } from '../components/Modal';
import axios from 'axios';

function Refresh() {
    window.location.reload(false);
}

function DataFilled() {
    var Name = null, Password = null, Email = null;

    Name = document.querySelector("#Username").value;
    Password = document.querySelector("#Password").value;
    Email = document.querySelector("#Email").value;

    if (Name == null || Password == null || Email == null) {
        return alert("Required fields were not filed.");
    }
    else {
        const url = 'https://localhost:44305/api/Register/' + Name + '/' + Password + '/' + Email;
        axios.post(url)
            .then(response => {
                if (response.status == 200) {
                    alert(response.data);
                }
                else { alert(response.data); }
            })
            .catch(error => { console.log(error) });
    }
}


export class LeftBlock extends Component {
    displayName = LeftBlock.name;

    constructor(props) {
        super(props);
        this.state = {
            OnRegistrationPage: false,
        }
    }

    RegisterAccount = () => {
        this.setState({ OnRegistrationPage: true });
    }

    render() {
        if (this.state.OnRegistrationPage) {
            document.querySelector("#colRight").remove();
            document.querySelector("#colLeft").style.height = "1920px";
            document.querySelector("#colLeft").style.width = "100%";
            document.querySelector("#colLeft").style.background = "-webkit-linear-gradient(right, rgb(196 5 199), rgb(6 20 52))";

            return (
                <table id="InputTable">
                    <thead>
                        <label id="HeadTitle">Enter your data:</label>
                    </thead>
                    <th>
                        <tr>
                            <label>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1">Username</span>
                                    <input type="text" id="Username" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                                </div>
                            </label>
                        </tr>
                        <tr>
                            <label>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1">Username</span>
                                    <input type="password" id="Password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"></input>
                                </div>
                            </label>
                        </tr>
                        <tr>
                            <label>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon2">Email@example.com</span>
                                    <input type="text" id="Email" class="form-control" placeholder="Insert your e-mail." aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                                </div>
                            </label>
                        </tr>
                        <tr>
                            <label>
                                <div class="input-group">
                                    <span class="input-group-text">With textarea</span>
                                    <textarea class="form-control" aria-label="" placeholder="Write something!"></textarea>
                                </div>
                            </label>
                        </tr>
                        <tr>
                            <div id="BTN">
                                <button type="button" class="btn btn-primary" onClick={DataFilled}>Register!</button>
                            </div>
                        </tr>
                        <tr>
                            <div id="BTN">
                                <button type="button" class="btn btn-primary" onClick={Refresh}>Get Back to Initial Page</button>
                            </div>
                        </tr>
                    </th>
                </table>
            );
        }

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
                        <br></br>
                        <br></br>
                        <div id="ButtonArea">
                            <button type="button" class="btn btn-secondary" onClick={this.RegisterAccount}>Get New Account!</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
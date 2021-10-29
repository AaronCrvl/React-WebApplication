import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './Css/LeftBlock.css';
import axios from 'axios';

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
                <div id="LeftBlock">
                    <label id="InputGroup">
                        <table id="InputTable">
                            <thead>
                                <label id="HeadTitle">Enter your data:</label>
                            </thead>
                            <th>
                                <tr>
                                    <label>
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon1">Username</span>
                                            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                                        </div>
                                    </label>
                                </tr>
                                <tr>
                                    <label>
                                        <div class="input-group mb-3">
                                            <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                                            <span class="input-group-text" id="basic-addon2">Email@example.com</span>
                                        </div>
                                    </label>
                                </tr>
                                <tr>
                                    <label>
                                        <div class="input-group mb-3">
                                            <span class="input-group-text">Date</span>
                                            <input type="text" class="form-control" placeholder="Server" aria-label="Server"></input>
                                        </div>
                                    </label>
                                </tr>
                                <tr>
                                    <label>
                                        <div class="input-group">
                                            <span class="input-group-text">With textarea</span>
                                            <textarea class="form-control" aria-label="Write something!"></textarea>
                                        </div>
                                    </label>
                                </tr>
                            </th>
                        </table>
                    </label>
                </div>
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
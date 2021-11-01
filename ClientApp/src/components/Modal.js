import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

function DataFilled() {
    var Name = null, Password = null, Email = null;

    Name = document.querySelector("#Username").value;
    Password = document.querySelector("#Password").value;
    Email = document.querySelector("#Email").value;

    if (Name == null || Password == null || Email == null) {
        return alert("Required fields were not filed.");
    }
    else {
        //handleApiCall = () => {
        //    const url = 'https://localhost:44305/api/Register/' + Name + '/' + Password + '/' + Email;
        //    axios.get(url)
        //        .then(response => { })
        //        .catch(error => { console.log(error) });
        //}        
    }
}

export class myModal extends React.Component {
    render() {
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
                                <input type="text" id="Password" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                            </div>
                        </label>
                    </tr>
                    <tr>
                        <label>
                            <div class="input-group mb-3">
                                <input type="text" id="Email" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
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
                    <tr>
                        <div id="EnterGetAccount">
                            <button type="button" class="btn btn-primary" onClick={DataFilled}>Register!</button>
                        </div>
                    </tr>
                </th>
            </table>
        );
    }
}

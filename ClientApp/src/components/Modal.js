import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';


class meModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            acct: [],
        }
    }

    componentDidMount() {
        const url = `http://localhost:3000/movies`;
        console.log(url);
        axios.get(url)
            .then(res => {
                console.log(res.data);
                const acct = res.data;
                this.setState({
                    acct: acct
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    // editMovie =(e) => {
    //     console.log("it works with edit!");
    //     if (typeof this.props.editClick === "function") {
    //         this.props.editClick(e)
    //     } else {
    //         console.log("Doesn't work with edit");
    //     }
    // }

    //removeMovie = (e) => {
    //    console.log("it works with remove!");
    //    if (typeof this.props.removeClick === "function") {
    //        this.props.removeClick(e)
    //    } else {
    //        console.log("Doesn't work with remove");
    //    }
    //}

    AddAccount = (e) => {
        this.props.AddAccount(e);
    }

    render() {
        let acct = this.state.acct.map(e =>
            <div>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                </button>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        return (
            <div>{myModal}</div>
        )
    }
}

export default List;
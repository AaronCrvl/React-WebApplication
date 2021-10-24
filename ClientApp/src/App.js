import React, { Component } from 'react';
import { Route } from 'react-router';
import { LeftBlock } from './components/LeftBlock';
import { RightBlock } from './components/RightBlock';
import '../src/components/Css/App.css';

export default class App extends Component {
    displayName = App.name

    //render() {
    //  return (
    //    <Layout>
    //      <Route exact path='/' component={Home} />
    //      <Route path='/counter' component={Counter} />
    //      <Route path='/fetchdata' component={FetchData} />
    //    </Layout>
    //  );
    //}

    render() {
        return (
            <div class="row">
                <div class="col" id="colLeft">
                    <LeftBlock></LeftBlock>
                </div>
                <div class="col" id="colRight">
                    <RightBlock></RightBlock>
                </div>
            </div>
        );
    }
}

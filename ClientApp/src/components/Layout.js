import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';

//import { NavMenu } from './NavMenu';
import { LeftBlock } from './LeftBlock';
import { RightBlock } from './RightBlock';

export class Layout extends Component {
    displayName = Layout.name

    render() {
        return (
            <Grid fluid>                
                    <Col>
                        <LeftBlock />
                    </Col>
                    <Col>
                        <RightBlock />
                    </Col>                
            </Grid>
        );
    }
}

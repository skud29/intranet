import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
import Page from '../components/template/Page'

class HomePage extends Component {
    render() {
        const { user } = this.props;
        return (
            <Page><h1>Hi {user.prenom}!</h1></Page>
        );
    }
}

function mapStateToProps(state) {
    const { authentication } = state;
    const { user } = authentication;
    return {
        user,
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
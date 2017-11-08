import React, {Component} from 'react';
import {string, oneOf} from 'prop-types';
import styled from 'styled-components';
import {Icon, Image} from 'semantic-ui-react'
import PopupMenu from './PopupMenu'
import { androidPerson } from 'react-icons-kit/ionicons/androidPerson';     
import { logOut } from 'react-icons-kit/ionicons/logOut';   

const AvatarStyled = styled.div`
    position: relative;
    display: block;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const AvatarLink = (props) => <a onclick={this.props.onClick}>{this.props.children}</a>

const AvatarLinkStyled = styled('AvatarLink')`
    display: block;
    float: center;
    text-align:center; 
    color: white;
    margin-top: 10px;
    cursor: pointer;
    &:hover {
        color: #cfcfcf;
    }
`;

const MenuItems = [
    {
        divider: false,
        label: 'Mon profil',
        icon: androidPerson,
        callback: function (e) {alert("Mon Profil")}
    },
    {
        divider: true
    },
    {
        divider: false,
        label: 'Déconnexion',
        icon : logOut,
        callback: function (e) {alert("Déconnexion")}
    }
];

class Avatar extends Component {
    constructor() {
        super();
        this.state = {
            showMenu: false
        };
    }

    toggleMenu() {
        this.setState({
            showMenu: !this.state.showMenu
        });
    }

    closeMenu() {
        this.setState({
            showMenu: false
        });
    }

    render() {
        return (
            <AvatarStyled>
                <Image shape='circular' size={this.props.iconSize} centered src={require('../../assets/img/' + this.props.user + '.jpg')} alt={this.props.user} />
                <AvatarLinkStyled onClick={this.toggleMenu.bind(this)}>
                    <h4>
                        {this.props.name}
                        <Icon name='dropdown' />
                    </h4>
                </AvatarLinkStyled>
                {this.state.showMenu && <PopupMenu items={MenuItems} onBlur={this.closeMenu.bind(this)} />}
            </AvatarStyled>
        )
    }
}

Avatar.propTypes = {
  user: string.isRequired,
  name: string.isRequired,
  iconSize: oneOf(['tiny', 'small'])
};

export default Avatar;
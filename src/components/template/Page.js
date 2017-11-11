import React, {Component} from 'react';
import {Sidebar, Header} from 'semantic-ui-react'
import styled from 'styled-components';
import Icon from 'react-icons-kit';
import {indentDecrease} from 'react-icons-kit/icomoon/indentDecrease';
import {indentIncrease} from 'react-icons-kit/icomoon/indentIncrease';
import SideMenu from './SideMenu'
import Avatar from './Avatar'
import Logo from './Logo'

const TemplateContainer = styled.div `
    padding-top: 0;
    padding-bottom: 0;
    margin: 0px;
`;

const BaseContainer = styled.div `
    padding-top: 16;
    padding-bottom: 16;
    font-family: 'Montserrat';
    font-size: 16;
    background: #2d353c;
    color: #c1c9d2;
    text-align: left;
    width: ${props => props.width || 220};
`;

class Page extends Component {
    state = {
        visible: true,
        visibilityIcon: indentDecrease
    }

    toggleVisibility = () => {
        let icon = (this.state.visible ? indentIncrease : indentDecrease);
        this.setState({
            visible: !this.state.visible,
            visibilityIcon: icon
        })
    }

    render() {
        const {visible, visibilityIcon} = this.state;
        return (
            <TemplateContainer>
                <Sidebar.Pushable>
                    <Sidebar
                        animation='push'
                        visible={visible}
                        icon='labeled'
                        vertical
                        borderless
                        style={{
                        background: '#2d353c'
                    }}>
                        <BaseContainer>
                            <Logo size='40' imageName='ods.jpg' societyName='Intranet O.D.S.'/>
                            <Avatar user='skuranda' iconSize='tiny' name='Serge Kuranda'/>
                            <SideMenu/>
                        </BaseContainer>
                    </Sidebar>
                    <Sidebar.Pusher
                        style={{
                        height: 800
                    }}>
                        <Header
                            as='h2'
                            style={{
                            padding: 18,
                            color: '#2d353c',
                            boxShadow: '0 2px 2px rgba(0,0,0,0.05), 0 1px 0 rgba(0,0,0,0.05)'
                        }}>
                            <Icon size='20' icon={visibilityIcon} onClick={this.toggleVisibility}/>
                            <Header.Content></Header.Content>
                        </Header>
                        {this.props.children}
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </TemplateContainer>
        );
    }
}

export default Page;
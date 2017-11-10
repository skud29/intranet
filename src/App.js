import React, { Component } from 'react';
import { Sidebar, Segment, Menu, Header, Container } from 'semantic-ui-react'
import styled from 'styled-components';
import Icon from 'react-icons-kit';
import { indentDecrease } from 'react-icons-kit/icomoon/indentDecrease';  
import { indentIncrease } from 'react-icons-kit/icomoon/indentIncrease';           
import SideMenu from './components/template/SideMenu'
import Avatar from './components/template/Avatar'
import Logo from './components/template/Logo'
import './App.css';

const TemplateContainer = props =>
<div
    style={{
        paddingTop: 0,
        paddingBottom: 0,
        margin: '0px',
        ...props.style
}}
>
    {props.children}
</div>;

const BaseContainer = props =>
<div
    style={{
        display: 'inline-block',
        paddingTop: 16,
        paddingBottom: 16,
        fontFamily: 'Roboto',
        width: props.width || 240,
        ...props.style
    }}
>
    {props.children}
</div>;

class App extends Component {
  state = { visible: true }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state;
    return (
        <TemplateContainer>
            <Sidebar.Pushable>
                <Sidebar animation='slide along'visible={visible} icon='labeled' vertical borderless style={{background: '#2d353c'}}>
                    <BaseContainer
                            style={{
                                fontFamily: 'Montserrat',
                                fontSize: 14,
                                background: '#2d353c',
                                color: '#C1C9D2',
                                paddingTop: 0,
                                textAlign: 'left'
                            }}
                        >
                        <Logo size='40' imageName='ods.jpg' societyName='Intranet O.D.S.' />
                        <Avatar 
                            user='skuranda' 
                            iconSize='tiny'
                            name='Serge Kuranda'
                        />
                        <SideMenu />
                    </BaseContainer>
                </Sidebar>
                <Sidebar.Pusher style={{ height: 600 }}>
                     <Header as='h2' style={{padding:18, color: '#2d353c', boxShadow: '0 2px 2px rgba(0,0,0,0.05), 0 1px 0 rgba(0,0,0,0.05)'}}>
                        <Icon size='20' icon={indentDecrease} />
                        <Header.Content>
                        </Header.Content>                
                    </Header>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </TemplateContainer>    
    );
  }
}

export default App;

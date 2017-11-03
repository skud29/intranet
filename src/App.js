import React, { Component } from 'react';
import { Sidebar, Segment, Menu, Header } from 'semantic-ui-react'
import SideMenu from './components/template/SideMenu'
import './App.css';


const BaseContainer = props =>
<div
    style={{
        display: 'inline-block',
        paddingTop: 16,
        paddingBottom: 16,
        fontFamily: 'Roboto',
        width: 240,
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
      <Sidebar.Pushable as={Segment} >
          <Sidebar as={Menu} animation='slide along'visible={visible} icon='labeled' vertical borderless style={{background: '#2d353c'}}>
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
                <div style={{ display: 'flex', padding: 16, background: '#1a2229' }}>
                    <div style={{ width: 40, height: 40 }}>
                        <img
                            src="https://e27.co/img/profiles/15483/profile_pic.png"
                            alt="Photo profile"
                            style={{ borderRadius: '30px', width: 40, height: 40 }}
                        />
                    </div>
                    <div style={{ paddingLeft: 6, paddingTop: 6 }}>
                        <div style={{ fontSize: 12, color: '#E5E5E5' }}>
                            {' '}Warren Mira{' '}
                        </div>
                        <div style={{ fontSize: 11 }}> Ninja Developer </div>
                    </div>
                </div>
                <SideMenu />
            </BaseContainer>
          </Sidebar>
          <Sidebar.Pusher style={{ height: 600 }}>
            <Segment basic>
              <Header as='h3'>Application Content</Header>
              
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
    );
  }
}

export default App;

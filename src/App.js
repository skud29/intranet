import React, { Component } from 'react';
import { Sidebar, Segment, Menu, Icon, Header } from 'semantic-ui-react'
import './App.css';

class App extends Component {
  state = { visible: true }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })


  render() {
    const { visible } = this.state
    return (
      <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='slide along' width='thin' visible={visible} icon='labeled' vertical inverted borderless >
            <Menu.Item name='home' color="green" >
              <Icon name='home' /> Home
              <Menu.Item name='home'>
                Home 1
              </Menu.Item>
              <Menu.Item name='home'>
                Home 2
              </Menu.Item>
            </Menu.Item>
            <Menu.Item name='gamepad'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item name='camera'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher >
            <Segment basic>
              <Header as='h3'>Application Content</Header>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
    );
  }
}

export default App;

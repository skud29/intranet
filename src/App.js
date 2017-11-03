import React, { Component } from 'react';
import { Sidebar, Segment, Menu, Icon, Header } from 'semantic-ui-react'
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';
import { ic_business_center } from 'react-icons-kit/md/ic_business_center';
import { ic_format_list_bulleted } from 'react-icons-kit/md/ic_format_list_bulleted';
import { ic_people } from 'react-icons-kit/md/ic_people';
import { ic_shopping_cart } from 'react-icons-kit/md/ic_shopping_cart';
import './App.css';

const Icon20 = props => <SvgIcon size={props.size || 20} icon={props.icon} />;

const SideNavWithAlerts = () =>
<SideNav
    hoverBgColor="white"
    hoverColor="#696969"
    highlightBgColor="#00acac"
    defaultSelected="products"
    highlightColor="#FFF"
>
    <div />
    <Nav id="dashboard">
        <NavIcon><Icon20 icon={ic_aspect_ratio} /></NavIcon>
        <NavText> Dashboard </NavText>
    </Nav>

    <Nav id="products">
        <NavIcon><Icon20 icon={ic_business_center} /></NavIcon>
        <NavText> Products </NavText>
    </Nav>
    <Nav id="orders">
        <NavIcon><Icon20 icon={ic_format_list_bulleted} /></NavIcon>
        <NavText>
            {' '}<span style={{ paddingRight: 6 }}>Orders</span>{' '}
            <span
                style={{
                    textAlign: 'center',
                    lineHeight: '16px',
                    height: 16,
                    width: 16,
                    margin: '0 auto',
                    borderRadius: '50%',
                    fontSize: 9,
                    display: 'inline-block',
                    color: '#FFF',
                    background: '#ff5b57'
                }}
            >
      10
            </span>
        </NavText>
    </Nav>

    <Nav id="customers">
        <NavIcon><Icon20 icon={ic_people} /></NavIcon>
        <NavText> Customers </NavText>
        <Nav id="dashboard2">
            <NavIcon><Icon20 size={16} icon={ic_aspect_ratio} /></NavIcon>
            <NavText> Search </NavText>
        </Nav>
        <Nav
            id="sales2"
            onNavClick={() => {
                console.log('Promote clicked!', arguments);
            }}
        >
            <NavIcon><Icon20 size={16} icon={ic_business} /></NavIcon>
            <NavText> Promote </NavText>
        </Nav>
        <Nav id="products2">
            <NavIcon><Icon20 size={16} icon={ic_business_center} /></NavIcon>
            <NavText> Social Media </NavText>
        </Nav>
    </Nav>
    <Nav
        id="sales"
        onNavClick={() => {
            console.log('Sales clicked!', arguments);
        }}
    >
        <NavIcon><Icon20 icon={ic_business} /></NavIcon><NavText> Sales </NavText>
    </Nav>
    <Nav id="deliveries">
        <NavIcon><Icon20 icon={ic_shopping_cart} /></NavIcon>
        <NavText> Deliveries </NavText>
    </Nav>
</SideNav>;

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
                <SideNavWithAlerts />
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

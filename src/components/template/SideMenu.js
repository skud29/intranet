import React, { Component } from 'react';
import SideNav from '../sidenav/SideNav';
import Nav, { NavIcon, NavText } from '../sidenav/Nav';
import ReactIcon from 'react-icons-kit';
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';
import { ic_business_center } from 'react-icons-kit/md/ic_business_center';
import { ic_format_list_bulleted } from 'react-icons-kit/md/ic_format_list_bulleted';
import { ic_people } from 'react-icons-kit/md/ic_people';
import { ic_shopping_cart } from 'react-icons-kit/md/ic_shopping_cart';

const Icon20 = props => <ReactIcon size={props.size || 20} icon={props.icon} />;

const SideMenu = () =>
<SideNav
    hoverBgColor="white"
    hoverColor="#696969"
    highlightBgColor="#00acac"
    defaultSelected="products"
    highlightColor="#FFF"
    marginLeft="10px"
    marginRight="10px"
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

export default SideMenu;
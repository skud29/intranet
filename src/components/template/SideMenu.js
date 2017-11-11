import React from 'react';
import SideNav from '../sidenav/SideNav';
import Nav, { NavIcon, NavText } from '../sidenav/Nav';
import ReactIcon from 'react-icons-kit';

import { ic_euro_symbol } from 'react-icons-kit/md/ic_euro_symbol';   
import { ic_perm_contact_calendar } from 'react-icons-kit/md/ic_perm_contact_calendar';  
import { ic_insert_drive_file } from 'react-icons-kit/md/ic_insert_drive_file';  
import { ic_equalizer } from 'react-icons-kit/md/ic_equalizer';   

import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';
import { ic_business_center } from 'react-icons-kit/md/ic_business_center';

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
    <Nav id="frais">
        <NavIcon><Icon20 icon={ic_euro_symbol} /></NavIcon>
        <NavText> Frais </NavText>
        <Nav id="saisieFrais">
            <NavIcon><Icon20 size={16} icon={ic_aspect_ratio} /></NavIcon>
            <NavText> Saisie des frais </NavText>
        </Nav>
        <Nav
            id="trajets"
            onNavClick={() => {
                console.log('Promote clicked!', arguments);
            }}
        >
            <NavIcon><Icon20 size={16} icon={ic_business} /></NavIcon>
            <NavText> Trajets </NavText>
        </Nav>
        <Nav id="admin">
            <NavIcon><Icon20 size={16} icon={ic_business_center} /></NavIcon>
            <NavText> Administration </NavText>
        </Nav>
        <Nav id="suivi">
            <NavIcon><Icon20 size={16} icon={ic_business_center} /></NavIcon>
            <NavText> Suivi des paiements </NavText>
        </Nav>
    </Nav>
    <Nav id="conges">
        <NavIcon><Icon20 icon={ic_perm_contact_calendar} /></NavIcon>
        <NavText> Congés </NavText>
        <Nav id="saisieConges">
            <NavIcon><Icon20 size={16} icon={ic_aspect_ratio} /></NavIcon>
            <NavText> Saisie des congés </NavText>
        </Nav>
        <Nav id="admin">
            <NavIcon><Icon20 size={16} icon={ic_business_center} /></NavIcon>
            <NavText> Administration </NavText>
        </Nav>
    </Nav>
    <Nav id="document">
        <NavIcon><Icon20 icon={ic_insert_drive_file} /></NavIcon>
        <NavText> Documents </NavText>
        <Nav id="fichePaie">
            <NavIcon><Icon20 size={16} icon={ic_aspect_ratio} /></NavIcon>
            <NavText> Fiches de paie </NavText>
        </Nav>
        <Nav id="depotPaie">
            <NavIcon><Icon20 size={16} icon={ic_business_center} /></NavIcon>
            <NavText> Dépot fiche de paie </NavText>
        </Nav>
    </Nav>
    <Nav id="facturation">
        <NavIcon><Icon20 icon={ic_equalizer} /></NavIcon>
        <NavText> Facturation </NavText>
        <Nav id="suiviFact">
            <NavIcon><Icon20 size={16} icon={ic_aspect_ratio} /></NavIcon>
            <NavText> Suivi des factures </NavText>
        </Nav>
        <Nav id="tdb">
            <NavIcon><Icon20 size={16} icon={ic_business_center} /></NavIcon>
            <NavText> Tableau de bord </NavText>
        </Nav>
        <Nav id="saisieFact">
            <NavIcon><Icon20 size={16} icon={ic_business_center} /></NavIcon>
            <NavText> Saisie des factures </NavText>
        </Nav>
    </Nav>
</SideNav>;

export default SideMenu;
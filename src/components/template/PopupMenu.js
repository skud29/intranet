import React from 'react';
import {string, oneOf} from 'prop-types';
import styled from 'styled-components';
import Icon from 'react-icons-kit';
import { profile } from 'react-icons-kit/icomoon/profile';    
import { horizontalCenter } from 'react-icons-kit';

const MenuStyled = styled.ul`
    position: absolute;
    margin-top: ${props => props.marginTop};
    left: ${props => props.left};
    background-color: #fff;
    border: 1px solid #e0e7e8;
    border-radius: 3px;
    -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08);
    border-style: solid;
    list-style: none;
    font-family: "Open Sans", Helvetica, Arial, sans-serif;
    z-index: 1000;
    
    /*
    display: block; 
    float: left;
    position: absolute;
    top: 100%;
    margin: 2px 0 0;
    margin-top: ${props => props.marginTop};
    left: ${props => props.left};
    min-width: 160px;
    color: #565656;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08);
    animation-fill-mode: both;
    animation-name: fadeInRight;
    animation-duration: 1s;
    border: 1px solid #e0e7e8;
    border-radius: 3px;
    border-style: solid;
    */
`;

const ItemMenuStyled = styled.li`
    display: list-item;
    text-align: -webkit-match-parent;
`;

const LinkMenuStyled = styled.a`
    display: block;
    padding: 3px 20px;
    clear: both;
    font-weight: 400;
    line-height: 1.42857143;
    color: #333;
    white-space: nowrap;
    font-size: 12px;
`;

const Divider = styled.li`
    height: 1px;
    margin: 3px 0;
    overflow: hidden;
    background-color: #e5e5e5;
    display: list-item;
    text-align: -webkit-match-parent;
`;

const SpanMenuCentered = horizontalCenter(
    props => <span>{props.children}</span>
);

const PopupMenu = ({items, marginTop, left}) => {
    return (

        <MenuStyled>
            <ItemMenuStyled>
                <LinkMenuStyled href="javascript:void(0);">
                    <SpanMenuCentered>
                        <Icon icon={profile} />
                        My Account
                    </SpanMenuCentered>
                </LinkMenuStyled>
            </ItemMenuStyled>
            <ItemMenuStyled>
                <LinkMenuStyled href="javascript:void(0);">
                    <span class="icon"><i class="fa fa-envelope"></i>
                    </span>Messages
                </LinkMenuStyled>
            </ItemMenuStyled>
            <ItemMenuStyled>
                <LinkMenuStyled href="javascript:void(0);">
                    <span class="icon"><i class="fa fa-cog"></i>
                    </span>Settings
                </LinkMenuStyled>
            </ItemMenuStyled>
            <Divider />
            <ItemMenuStyled>
                <LinkMenuStyled href="javascript:void(0);">
                    <span class="icon"><i class="fa fa-sign-out"></i>
                    </span>Logout
                </LinkMenuStyled>
            </ItemMenuStyled>
        </MenuStyled>
    )
}

PopupMenu.defaultProps = {
    marginTop: '20px',
    left: '20px'
}

export default PopupMenu;
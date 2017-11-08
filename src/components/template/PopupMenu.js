import React, { Component } from 'react';
import {string, func} from 'prop-types';
import styled from 'styled-components';
import Icon from 'react-icons-kit';
import { horizontalCenter } from 'react-icons-kit';

const MenuStyled = styled.ul`
    position: absolute;
    float: left;
    left: ${props => props.left};
    margin-top: ${props => props.marginTop};
    margin-left:0;
    padding-left:0;
    background-color: #fff;
    border: 1px solid #e0e7e8;
    border-radius: 3px;
    -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08);
    border-style: solid;
    list-style: none;
    font-family: "Open Sans", Helvetica, Arial, sans-serif;
    z-index: 1000;
    &:before {
        bottom: 100%;
        left: 85%;
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
        border-color: rgba(255, 255, 255, 0);
        border-bottom-color: #fff;
        border-width: 8px;
        margin-left: -16px;
        top: -16px;        
    }
`;

const ItemMenuStyled = styled.li`
    display: list-item;
    &:hover {
        background-color:#efefef;
    }
`;

const LinkMenu = (props) => <a onclick={this.props.onClick}>{this.props.children}</a>

const LinkMenuStyled = styled('LinkMenu')`
    display: block;
    padding: 3px 20px;
    clear: both;
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

class PopupMenu extends Component {
               
    componentDidMount(){
        this.refs.menu.focus();
    }

    render() {            
        let menuList = this.props.items.map(item => {
            if (item.divider) {
                return <Divider />
            }
            else {
                return (
                    <ItemMenuStyled>
                        <LinkMenuStyled onClick={item.callback}>
                            <SpanMenuCentered>
                                {item.icon ? <Icon icon={item.icon} /> :''}
                                {item.label}
                            </SpanMenuCentered>
                        </LinkMenuStyled>
                    </ItemMenuStyled>
                )    
            }
        });

        return (
            <div ref="menu" tabindex="0" onBlur={this.props.onBlur}>
                <MenuStyled marginTop={this.props.marginTop} left={this.props.left}>{menuList}</MenuStyled>
            </div>
        )
    }
}

PopupMenu.propTypes = {
    marginTop: string,
    left: string,
    onBlur: func
}

PopupMenu.defaultProps = {
    marginTop: '20px',
    left: '50px'
}

export default PopupMenu;
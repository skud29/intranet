import React from 'react';
import {string, oneOf} from 'prop-types';
import styled from 'styled-components';
import {Icon, Image} from 'semantic-ui-react'
import PopupMenu from './PopupMenu'

const AvatarStyled = styled.div`
    position: relative;
    display: block;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const AvatarLink = styled.a`
    display: block;
    float: center;
    text-align:center; 
    color: white;
    margin-top: 10px;
    cursor: pointer;
    &:hover {
        color: gold;
    }
`;

const Avatar = ({user, name, iconSize}) => {
    return (
        <AvatarStyled>
            <Image shape='circular' size={iconSize} centered src={require('../../assets/img/' + user + '.jpg')} alt={user} />
            <AvatarLink>
                <h4>
                    {name}
                    <Icon name='dropdown' />
                </h4>
            </AvatarLink>
            <PopupMenu />
        </AvatarStyled>
    )
}

Avatar.propTypes = {
  user: string.isRequired,
  name: string.isRequired,
  iconSize: oneOf(['tiny', 'small'])
};

export default Avatar;
import React from 'react';
import {string} from 'prop-types';
import styled from 'styled-components';
import {Icon} from 'semantic-ui-react'

const AvatarStyled = styled.div`
    position: relative;
    display: block;
`;

const AvatarImgStyled = styled.img`
    display: block;
    width: ${props => props.iconSize || '65px'};
    height: ${props => props.iconSize || '65px'};
    margin: auto;
    border-radius: 50%;
`;

const AvatarLink = styled.a`
`;

const Avatar = ({user, name, iconSize}) => {
    return (
        <AvatarStyled>
            <AvatarImgStyled iconSize={iconSize} src={require('../../assets/img/' + user + '.jpg')} alt={user} />
            <AvatarLink>
                <h4>
                    {name}
                    <Icon name='dropdown' />
                </h4>
            </AvatarLink>
        </AvatarStyled>
    )
}

Avatar.propTypes = {
  user: string.isRequired,
  name: string.isRequired,
  iconSize: string,
};

export default Avatar;
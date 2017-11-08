import React from 'react';
import { Image } from 'semantic-ui-react'
import styled from 'styled-components';
import { horizontalCenter } from 'react-icons-kit';

const SpanLogoStyled = styled.span`
    position: relative;
    display: block;
    padding-top: 10px;
    margin:auto;
    font-family: 'Arial';
    font-size: 20px;
    text-align:center; 
`;

const SpanLogoCentered = horizontalCenter(
    props => <SpanLogoStyled>{props.children}</SpanLogoStyled>
);

const Logo = ({size, imageName, societyName}) =>
    <SpanLogoCentered>
        <Image shape='circular' width={size} src={require('../../assets/img/'+imageName)} alt="logo" />
        &nbsp;{societyName}
    </SpanLogoCentered>

export default Logo;
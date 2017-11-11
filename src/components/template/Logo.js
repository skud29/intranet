import React from 'react';
import { Image } from 'semantic-ui-react'
import styled from 'styled-components';
import { horizontalCenter } from 'react-icons-kit';

const SpanLogoStyled = styled.span`
    position: relative;
    display: block;
    padding-top: 6px;
    margin:auto;
    font-family: 'Montserrat';
    font-size: 18px;
    text-align:center; 
    background: #ffffff;
    color: #2d353c;
`;

const SpanLogoCentered = horizontalCenter(
    props => <SpanLogoStyled>{props.children}</SpanLogoStyled>
);

const Logo = ({size, imageName, societyName}) =>
    <SpanLogoCentered>
        <Image shape='circular' width={size} src={require('../../assets/img/'+imageName)} alt="logo" />
        {societyName}
    </SpanLogoCentered>

export default Logo;
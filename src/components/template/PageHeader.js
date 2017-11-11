import React, {Component} from 'react';
import {Sidebar, Header} from 'semantic-ui-react'
import styled from 'styled-components';

const PageHeaderStyled = styled.div `
    padding: 15px;
    border-bottom: 1px solid #dce0e6;
    border-top: 1px solid #eee;
    background: #F6F8F8;
    position: relative;
    margin: 0;
    color: #999;
    font-family: 'Montserrat';
`;

const TitleStyled = styled.span `
    font-size: 16px;
`;

const DescriptionStyled = styled.span `
    display: block;
    font-size: 12px;
    margin-top: 5px;
`;

const PageHeader = ({title, description}) => <PageHeaderStyled>
    <TitleStyled>{title}</TitleStyled>
    <DescriptionStyled>{description}</DescriptionStyled>
</PageHeaderStyled>

export default PageHeader;
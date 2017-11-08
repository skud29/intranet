import React from 'react';
import { Image } from 'semantic-ui-react'

const Logo = (props) =>
    <div>
        <Image width={props.width} centered src={require('../../assets/img/'+props.src)} alt="logo" />
    </div>

export default Logo;
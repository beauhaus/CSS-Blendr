import React from 'react';
import graphql from 'gatsby';
import './mode.scss';
// import {Link} from 'gatsby';

const ModeTemplate =({mode}) => {

    return (
        <>
        <h1>mode Title: {mode.title}</h1>
        <hr/>

        <p>mode Body: {mode.excerpt}</p>


        </>
    )
}

export default ModeTemplate;
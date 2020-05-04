import React from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';
import {Helmet} from 'react-helmet'

import './layout.scss';
import Header from './scaffold/header'
import useSiteMetadata from './hooks/use-site-metadata';

const Layout = ({ children, location }) => {
    // console.log("Layout loc: ", location)

    const {title, description} = useSiteMetadata
    return (
        <>
        <Helmet>
            <html lang="en"/>
            <title>CSS Blendr</title>
            <meta name={title} content={description}/>
        </Helmet>
            <Header currentPath={location.pathname}/>
                <TransitionGroup component={null}>
                    <Transition key={location.pathname} timeout={{ enter: 1500, exit: 1500 }}>
                        {status => <div className={`page ${status}`}>{children}</div>}
                    </Transition>
                </TransitionGroup>
        </>
    )
};

export default Layout;
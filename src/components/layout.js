import React from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';

import './Layout.scss';
import Header from './scaffold/header'

const Layout = ({ children, location }) => {
    // console.log("Layout loc: ", location)
    return (
        <>
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
import React from 'react';
import './header.scss'
import TopNavBtn from './topnavbtn'

const Header = (props) => {
    const path = props.currentPath;
    return (
        <header className="header-wrapper">
            {/* <TopNavBtn path={path} /> */}
        </header>
    )
};

export default Header;
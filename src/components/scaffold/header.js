import React from 'react';
import './header.scss'
import TopNavBtn from './topnavbtn'
import Link from 'gatsby-link';

const Header = () => (
        <header className="header-wrapper">
            <TopNavBtn/>
            <Link to="/page-b">B</Link>
        </header>
    );

export default Header;
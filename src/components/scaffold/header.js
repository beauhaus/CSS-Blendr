import React from 'react';
import './header.scss'
import TopNavBtn from './topnavbtn'
import Link from 'gatsby-link';

const Header = () => (
        <header className="header-wrapper">
            <TopNavBtn/>
            {/* <Link className="b-link" to="/page-b">PAGE B</Link>
            <Link className="d-link" to="/page-d">PAGED</Link> */}
        </header>
    );

export default Header;
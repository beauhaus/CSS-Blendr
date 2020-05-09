import React from 'react';
import Link from 'gatsby-link';
import './topnavbtn.scss'

 
/*TODO: remove btn and styled Link as button instead */
const TopNavBtn = ({ path }) => {
    return (path !== "/" ?
        <button className="top-nav-btn btn-on">
                <Link to="/"></Link>
        </button> :
        <button className="top-nav-btn btn-off">
                <Link to="/page-a"></Link>
        </button>
    )
};

export default TopNavBtn;
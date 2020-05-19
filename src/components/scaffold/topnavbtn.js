import React from 'react';
import Link from 'gatsby-link';
import './topnavbtn.scss'

 
/*TODO: remove btn and styled Link as button instead */
const TopNavBtn = ({ path }) => {
    return (path !== "/" ?
        <button name="blender-on" className="top-nav-btn btn-on">
                <Link to="/">home</Link>
        </button> :
        <button name="blender-off" className="top-nav-btn btn-off">
                <Link to="/page-a">pageA</Link>
        </button>
    )
};

export default TopNavBtn;
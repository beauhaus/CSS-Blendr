import React, {useContext} from 'react';
import Link from 'gatsby-link';
import './topnavbtn.scss'
import {NavContext} from '../layout'


const TopNavBtn = () => {
    const {currentPath} = useContext(NavContext);
    return (currentPath !== "/" ?
        <button name="blender-on" className="top-nav-btn btn-on">
                <Link to="/">home</Link>
        </button> :
        <button name="blender-off" className="top-nav-btn btn-off">
                <Link to="/page-a">pageA</Link>
        </button>
    )
};

export default TopNavBtn;
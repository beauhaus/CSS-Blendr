import React from 'react';
import Link from 'gatsby-link';
import './topnavbtn.scss'


/*TODO: remove btn and styled Link as button instead */
const TopNavBtn = ({ path }) => {
    return (path !== "/" ?
        <button className="btn-on">
            <div className="cast-light">
                <Link to="/"></Link>
            </div>
        </button> :
        <button className="btn-off">
            <div className="cast-light">
                <Link to="/page-a"></Link>
            </div>
        </button>
    )
};

export default TopNavBtn;
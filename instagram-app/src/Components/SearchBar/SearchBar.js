// Search Bar js file

import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <div className="topNav">
            <div className="topLogos">
            </div>
            <div className="search">
                <input type="text" placeholder="search"></input>
            </div>
            <div className ="profileNav">
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
            </div>
        </div>
    )
}

export default SearchBar;
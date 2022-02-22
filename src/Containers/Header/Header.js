import React from 'react';
import SearchBox from '../../Components/SearchBox/SearchBox'
import HeaderButtons from '../../Components/TwoButtons/TwoButtons'
import HamburgerIcon from '../../Components/HamburgerIcon/HamburgerIcon'
import "./Header.css"
function Header(props) {
    return (
        <header className = "Header">
            <nav>
                <HamburgerIcon />
                <HeaderButtons />
            </nav>
            <div id = "HeroContent">
                <span>Dolor lorem sea takimata eirmod invidunt, 
                lorem erat erat et ea et. Voluptua vero at.</span>
                <SearchBox /> 
            </div>
        </header>
    );
}

export default Header;
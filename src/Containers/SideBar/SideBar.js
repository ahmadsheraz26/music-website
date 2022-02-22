import React from 'react';
import "./SideBar.css"
import {connect} from 'react-redux'
import SideBarButtons from '../../Components/SideBarButtons/SideBarButtons'
import Logo from '../../Components/Logo/Logo'
import SocialIcons from '../../Components/SocialIcons/SocialIcons'
import CopyrightDetails from '../../Components/CopyrightDetails/CopyrightDetails'
function SideBar(props) {
    
    let SideBar = null;
    let classes = ["SideBar"];
    if (props.toggle) {
        SideBar = 
        <nav className = {classes}>
            <Logo></Logo>
            <div id = "SideBar_Navs">
                <SideBarButtons></SideBarButtons>
                <CopyrightDetails></CopyrightDetails>
                <SocialIcons></SocialIcons>
            </div>
        </nav>
    } 
    return (
        <React.Fragment>
            {SideBar}   
        </React.Fragment>
    );
}
const mapStateToProps = state => {
    return {
        toggle:state.HamburgerIcon.toggleSideBar
    }
}

export default connect(mapStateToProps)(SideBar);
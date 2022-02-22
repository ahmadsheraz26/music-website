import React from 'react';
import {connect} from 'react-redux'
import * as actionTypes from '../../store/actions'
import "./HamburgerIcon.css"
function HamburgerIcon(props) {
    return (
        <svg onClick = {props.ToggleSideBar} id = "HamburgerIcon" viewBox="0 0 16 16" fill="none">
            <path d="M2.51562 3.01562H13.4844V3.98438H2.51562V3.01562Z" fill="#404040" stroke="#484848" strokeWidth="0.6"/>
            <path d="M2.51562 7.51562H13.4844V8.48438H2.51562V7.51562Z" fill="#404040" stroke="#484848" strokeWidth="0.6"/>
            <path d="M2.51562 12.0156H13.4844V12.9844H2.51562V12.0156Z" fill="#404040" stroke="#484848" strokeWidth="0.6"/>
        </svg>

    );
}
const mapDispatchToProps = dispatch => {
    return {
        ToggleSideBar : () => dispatch({type:actionTypes.CloseSideBar}),
    }
}
export default connect(mapDispatchToProps)(HamburgerIcon);
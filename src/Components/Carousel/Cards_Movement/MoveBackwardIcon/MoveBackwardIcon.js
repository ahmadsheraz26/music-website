import React from 'react';
import "../Cards_Movement.css"
function MoveBackwardIcon(props) {
    let prevCard_Icon = null;
    if (props.ToggleBackward) {
        prevCard_Icon = 
        <svg onClick = {props.clickBackward} className = "PrevSlide MovementIcons" viewBox="0 0 16 16" fill="none">
            <defs>
            <linearGradient id="g3" x1="16" y1="0" x2="16" y2="56" gradientUnits="userSpaceOnUse">
            <stop offset="2.98023e-09" stopColor="#33C9CC"/>
            <stop offset="1" stopColor="#69ECEF"/>
            </linearGradient>
            </defs>
            <path fillRule="evenodd" clipRule="evenodd" d="M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8V8ZM8.354 10.646C8.44789 10.7399 8.50063 10.8672 8.50063 11C8.50063 11.1328 8.44789 11.2601 8.354 11.354C8.26011 11.4479 8.13278 11.5006 8 11.5006C7.86722 11.5006 7.73989 11.4479 7.646 11.354L4.646 8.354C4.59944 8.30755 4.56249 8.25238 4.53729 8.19163C4.51208 8.13089 4.49911 8.06577 4.49911 8C4.49911 7.93423 4.51208 7.86911 4.53729 7.80837C4.56249 7.74762 4.59944 7.69245 4.646 7.646L7.646 4.646C7.69249 4.59951 7.74768 4.56264 7.80842 4.53748C7.86916 4.51232 7.93426 4.49937 8 4.49937C8.06574 4.49937 8.13084 4.51232 8.19158 4.53748C8.25232 4.56264 8.30751 4.59951 8.354 4.646C8.40049 4.69249 8.43736 4.74768 8.46252 4.80842C8.48768 4.86916 8.50063 4.93426 8.50063 5C8.50063 5.06574 8.48768 5.13084 8.46252 5.19158C8.43736 5.25232 8.40049 5.30751 8.354 5.354L6.207 7.5H11C11.1326 7.5 11.2598 7.55268 11.3536 7.64645C11.4473 7.74021 11.5 7.86739 11.5 8C11.5 8.13261 11.4473 8.25979 11.3536 8.35355C11.2598 8.44732 11.1326 8.5 11 8.5H6.207L8.354 10.646Z" 
            fill="black"/>
        </svg>
        // <svg onClick = {props.clickBackward} className = "PrevSlide MovementIcons" viewBox="0 0 32 32" fill="none">
        //     <circle cx="16" cy="16" r="16" fill="url(#paint0_linear)"/>

        // </svg>
    }
    return (
        <React.Fragment>
            {prevCard_Icon}    
        </React.Fragment>    
    );
}

export default MoveBackwardIcon;
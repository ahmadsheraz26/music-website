import React from 'react';
import "./SimpleButton.css"
function SimpleButton(props) {
    return (
        <div className = "SimpleButton">
            <span>{props.ButtonLabel}</span>
        </div>
    );
}

export default SimpleButton;
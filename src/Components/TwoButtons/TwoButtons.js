import React from 'react';
import SimpleButton from '../SimpleButton/SimpleButton'
import "./TwoButtons.css"
function TwoButtons(props) {
    return (
        <div className = "ButtonsContainer" >
            <SimpleButton ButtonLabel = {"Log In"}/>
            <SimpleButton ButtonLabel = {"Sign Up"}/>
        </div>
    );
}

export default TwoButtons;
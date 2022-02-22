import React, { Component } from 'react';
import "./Card_Head.css"
class Card_Head extends Component {
    state = {  }
    render() { 
        return (
            <div className="CardHead">
                <div className="Content">
                    <h1 className="title">Lorum Ispum</h1>
                    <div className="searchBox">
                        <div className="textArea"></div>                        
                    </div>
                    <svg className = "Card_Arrow" preserveAspectRatio="none" viewBox="-0.5 0 16 16" fill="none">
                        <path d="M1 8H15" stroke="#27A7A9" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 1L15 8L8 15" stroke="#27A7A9" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <svg className="LeftCard_Head_Arrow" viewBox="0 0 8 16" fill="none">
                    <path id="Triangle_Right" d="M8 8L0 0V16L8 8Z" fill="#303030" fillOpacity="1"/>
                </svg>    
            </div>
        );
    }
}
export default Card_Head;
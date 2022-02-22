import React, { Component } from 'react';
import "./Card.css"
class Card extends Component {
    render() {
        return (
            <div className="Card">
                <div className="Card_Stats">
                    <div className="Popularity">
                        <defs>
                        <linearGradient id='g1'>
                            <stop stopColor='#4facfe'/>
                            <stop offset='1' stopColor='#00f2fe'/>
                        </linearGradient>
                        </defs>
                        <svg id = "Popularity" preserveAspectRatio="none" viewBox="0 0 16 16" fill="none">
                            <path d="M8 13.3333V6.66666" 
                            stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 13.3333V2.66666" 
                            stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4 13.3333V10.6667" 
                            stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <label htmlFor="Popularity">12</label>
                    </div>
                    <div className="Likes">
                        <svg id = "Heart" viewBox="0 0 16 16" fill="none">
                            <path 
                            d="M8.17255 13.1808C8.07592 13.2731 7.92377 
                            13.2731 7.82714 13.1808L3.36082 8.9135L2.7523 
                            8.33209C2.11198 7.72031 1.75 6.88805 1.75 6.0177C1.75 
                            5.14736 2.11198 4.3151 2.7523 3.70331C3.39224 3.0919 
                            4.25785 2.75029 5.15816 2.75029C6.05848 2.75029 6.92409 
                            3.0919 7.56403 3.70331L7.99985 4.11971L8.43562 3.70335C8.43564 3.70334 
                            8.43565 3.70333 8.43567 3.70331C8.75257 3.4004 9.12821 3.16068 9.54087 2.99732C9.95353 2.83396 10.3955 2.75 10.8415 2.75C11.2876 2.75 11.7295 2.83396 12.1422 2.99732C12.5549 3.16069 12.9305 3.40043 13.2474 3.70335M8.17255 13.1808L13.0747 3.88407M8.17255 13.1808L12.6389 8.9135L13.2473 8.33214L8.17255 13.1808ZM13.2474 3.70335L13.0747 3.88407M13.2474 3.70335C13.2474 3.70333 13.2474 3.7033 13.2473 3.70327L13.0747 3.88407M13.2474 3.70335C13.5645 4.00615 13.8166 4.36627 13.9889 4.76347C14.1612 5.16073 14.25 5.58696 14.25 6.0177C14.25 6.44845 14.1612 6.87468 13.9889 7.27194C13.8166 7.66916 13.5645 8.0293 13.2474 8.33209L13.0747 8.15134C13.368 7.87119 13.6007 7.53857 13.7595 7.17247C13.9183 6.80638 14 6.41398 14 6.0177C14 5.62143 13.9183 5.22903 13.7595 4.86293C13.6007 4.49684 13.368 
                            4.16422 13.0747 3.88407" 
                            stroke = "white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>      
                        <label htmlFor="Heart">24</label>    
                    </div>
                </div>
                <div className="Card_Details">
                    <div className="Card_Label">Album Title</div>
                    <div className="Card_Label_Desc">Album Owner's Name</div>
                </div>
                <svg className = "Card_Arrow" preserveAspectRatio="none" viewBox="-0.5 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 8H15" stroke="#27A7A9" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 1L15 8L8 15" stroke="#27A7A9" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        );
    }
}


export default Card;
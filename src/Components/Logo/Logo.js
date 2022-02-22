import React from 'react';
import "./Logo.css"
function Logo(props) {
    return (
        <svg id = "Logo" viewBox="0 0 80 80" fill='url(#g1)'>
            <defs>
            <linearGradient id='g1'>
            <stop stopColor='#4facfe'/>
            <stop offset='1' stopColor='#00f2fe'/>
            </linearGradient>
            </defs>
            <path fill="url(#g1)" fillRule="evenodd" clipRule="evenodd" d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80ZM40.0001 68.3333C55.6482 68.3333 68.3334 55.6481 68.3334 40C68.3334 24.3519 55.6482 11.6667 40.0001 11.6667C24.352 11.6667 11.6667 24.3519 11.6667 40C11.6667 55.6481 24.352 68.3333 40.0001 68.3333Z"/>
        </svg>
    );
}

export default Logo;
import React, { Component } from 'react';
import CardHead from './Card_Head/Card_Head'
import Cards from './Cards/Cards'
import "./Carousel.css"
class Carousel extends Component {
    render() {
        return (
            <div className = "Carousel">
                <CardHead />
                <Cards />
            </div>
        );
    }
}

export default Carousel;
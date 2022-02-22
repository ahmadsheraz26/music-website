import React, { Component } from 'react';
import Carousel from '../../Components/Carousel/Carousel'
import {connect} from 'react-redux'
import * as actionTypes from '../../store/actions'
import "./MainContent.css"
class MainContent extends Component {
    debounce = (func, time) => {
        var timer;
        return function(event) {
            if (timer) clearTimeout(timer);
            timer = setTimeout(func,time,event);
        };
    }
    demo = () => {
        console.log("Demo")
    }
    render() {
        return (
            <main className = "MainContent">
                <Carousel />
                <Carousel />
                <Carousel />
                <Carousel />
                <Carousel />
                <Carousel />
            </main>
        );
    }
    componentDidMount(){
        window.addEventListener("scroll", this.demo);
    }
    componentWillUnmount(){
        window.removeEventListener("scroll", this.demo);
    }
}
const mapDispatchToProps = dispatch => {
    return {
        UpdateHeaderHeight:() => dispatch({type:actionTypes.Update_Header_Height})
    };
}
export default connect(mapDispatchToProps)(MainContent);
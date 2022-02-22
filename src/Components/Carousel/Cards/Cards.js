import React, { Component } from 'react';
//import CardsMovement from '../Cards_Movement/Cards_Movement'
import MoveForwardIcon from '../Cards_Movement/MoveForwardIcon/MoveForwardIcon'
import MoveBackwardIcon from '../Cards_Movement/MoveBackwardIcon/MoveBackwardIcon'
import Card from "../Card/Card"
import "./Cards.css"
class Cards extends Component {
    constructor(props){
        super(props)
        this.CardsContainerRef = React.createRef();
        this.state = {
            CardsNo:5,
            CardsThatAreLostBehind:-1,
            CardsThatAreLostForward:-1
        }
    }
    UpdateLostCards =() => {
        let CardsContainer_Dimensions = this.CardsContainerRef.current.getBoundingClientRect();
        let Cards = this.CardsContainerRef.current.children;
        let Lost_PreviousCards = -1;
        let Lost_ForwardCards = this.state.CardsNo;
        let i = 0;
        while(i < this.state.CardsNo && Cards[i].getBoundingClientRect().x < CardsContainer_Dimensions.x) { 
            i++;
        }
        Lost_PreviousCards = i-1;
        i = this.state.CardsNo - 1;
        while(i >= 1 && Cards[i].getBoundingClientRect().right > CardsContainer_Dimensions.right) { 
            i--;
        }
        Lost_ForwardCards = i+1;
        this.setState({CardsThatAreLostBehind:Lost_PreviousCards, CardsThatAreLostForward:Lost_ForwardCards})
    }
    SwitchCardForwardHandler = () => {
        this.CardsContainerRef.current.children[this.state.CardsThatAreLostForward].scrollIntoView();
        this.setState((prevState,prevProps) => {
            return {   
                CardsThatAreLostForward:prevState.CardsThatAreLostForward + 1,
                CardsThatAreLostBehind:prevState.CardsThatAreLostBehind + 1
            }
        })
    }
    SwitchCardBackwardHandler = () => {
        this.CardsContainerRef.current.children[this.state.CardsThatAreLostBehind].scrollIntoView();
        this.setState((prevState,prevProps) => {
            return {   
                CardsThatAreLostForward:prevState.CardsThatAreLostForward - 1,
                CardsThatAreLostBehind:prevState.CardsThatAreLostBehind - 1
            }
        })
    }
    debounce = (func, time) => {
        var timer;
        return function(event) {
            if (timer) clearTimeout(timer);
            timer = setTimeout(func,time,event);
        };
    }
    render() {
        let CardList = [];
        for (let i=0; i< this.state.CardsNo; i++) {
            CardList.push(<Card key = {i} />);
        }
        let CardsForwardArrow = null;
        let CardsBackwardArrow = null;
        let ToggleForward = this.state.CardsThatAreLostForward !== this.state.CardsNo;
        let ToggleBackward = this.state.CardsThatAreLostBehind !== -1;
        if (ToggleBackward || ToggleForward) {
            CardsForwardArrow = 
                <MoveForwardIcon 
                    ToggleForward = {ToggleForward}
                    clickForward = {this.SwitchCardForwardHandler}
                />
            CardsBackwardArrow = 
                <MoveBackwardIcon 
                    ToggleBackward = {ToggleBackward}
                    clickBackward = {this.SwitchCardBackwardHandler}
                /> 
        }

        return (            
            <div className = "Cards_Wrapper">
                {CardsForwardArrow}
                {CardsBackwardArrow}
                <div ref = {this.CardsContainerRef} className = "Cards"> 
                    {CardList}
                </div>
            </div>
        );
    }
    componentDidMount(){
        window.addEventListener("resize", this.debounce(this.UpdateLostCards.bind(this),200));
        this.UpdateLostCards();
    }
    componentWillUnmount(){
        window.removeEventListener("resize", this.debounce(this.UpdateLostCards.bind(this),200));
    }
}

export default Cards;
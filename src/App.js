import React from 'react';
import "./App.css"
import {connect} from 'react-redux'
import MainContent from './Containers/MainContent/MainContent'
import Header from './Containers/Header/Header'
import SideBar from './Containers/SideBar/SideBar';
function App(props) {
  const StyleScroll = {
    gridTemplateRows:props.HeaderHeight + "% repeat(auto-fit, minmax(0px,1fr))"
  }
  return (
    <div id = "as" style = {StyleScroll}>
      <SideBar></SideBar>
      <Header></Header>
      <MainContent></MainContent>
    </div>
  );
}
const mapStateToProps = state => {
  return {
      toggle:state.HamburgerIcon.toggleSideBar,
      HeaderHeight:state.HeaderHeightUpdate.HeaderHeight
  }
}
export default connect(mapStateToProps)(App);

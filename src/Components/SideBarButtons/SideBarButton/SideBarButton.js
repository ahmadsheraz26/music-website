import React from 'react';
import "./SideBarButton.css"
import AlbumIcon from './Icons/AlbumIcon/AlbumIcon'
import MusicIcon from './Icons/MusicIcon/MusicIcon'
import MicIcon from './Icons/MicIcon/MicIcon'
function SideBarButton(props) {
    let Icon = null;
    const IconColor = "#484848";
    
    if (props.MusicIcon) Icon = <MusicIcon hoverStateGradient = {"url(#g1)"} Color = {IconColor}>
    <defs>
        <linearGradient id='g1'>
        <stop stopColor='#4facfe'/>
        <stop offset='1' stopColor='#00f2fe'/>
        </linearGradient>
    </defs>

    </MusicIcon>
    if (props.AlbumIcon) Icon = <AlbumIcon hoverStateGradient = {"url(#g1)"} Color = {IconColor}></AlbumIcon>
    if (props.MicIcon) Icon = <MicIcon hoverStateGradient = {"url(#g1)"} Color = {IconColor}></MicIcon>
    return (

        <div className = "SideBarButton">
            {Icon}
        </div>
    );
}

export default SideBarButton;
import React from 'react';
import SideBarButton from './SideBarButton/SideBarButton'
function SideBarButtons(props) {
    return (
        <div id = "SideBarButtons">
            <SideBarButton MusicIcon = {true}/>
            <SideBarButton AlbumIcon = {true}/>
            <SideBarButton MicIcon = {true} />
        </div>
    );
}

export default SideBarButtons;
import React from 'react';
import logonew from "./logonew.gif";
import './index.css'
// import Wave from './AniBack';




const Splash = () => {
    return (
        <>
        <div className="splash-screen">
            <img id="logo_img" src={logonew} alt="Loading...."></img>
        </div>
        {/* <Wave/> */}
        
        </>
    );
};

export default Splash;

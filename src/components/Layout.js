import React from 'react';

import Navbar from './Nav';
import Footer from './Footer';
import hero from '../Assets/images/banner-media-bone.jpg';

function Layout(props){
    //const Children = props.children;
    const style = {
        background: `url("${hero}") no-repeat top center`,
        backgroundSize: 'cover',
        height: '100vh',
        width: '100vw',
        zIndex: -1,
        position: 'absolute',
        filter: 'brightness(0.5) blur(2px)'
    }
    const ubication = window.location.pathname;
    console.log(ubication)
    if(ubication === '/'){
        return (
            <React.Fragment>
                <div style={style}></div>
                <div className="App ">
                    <Navbar/>
                        {props.children}
                    <Footer/>
                </div>
            </React.Fragment>
        )
        
    }
    return (
        <React.Fragment>
            <div className="App ">
                <Navbar/>
                    {props.children}
                <Footer/>
            </div>
        </React.Fragment>
    )

     
    
    
}

export default Layout;
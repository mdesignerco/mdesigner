import React from 'react';

import Navbar from './Nav';
import Footer from './Footer';

function Layout(props){
    //const Children = props.children;
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
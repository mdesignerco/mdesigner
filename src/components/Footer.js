import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render(){
        return(
            <React.Fragment>
                <footer>
                    <p >Copyright © 2019  <Link to="/">mdesigner.co </Link></p>
                </footer>
            </React.Fragment>
        )
    }
}

export default Footer;
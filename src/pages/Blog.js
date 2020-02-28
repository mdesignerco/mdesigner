import React from 'react';
import {Link } from 'react-router-dom';

import Card from '../components/Card';

class Blog extends React.Component {
    render(){
        return (
            <React.Fragment>
               <div className="content__blog">
                   <div className="content__blog-col">
                       <h1>Tecnología</h1>
                    </div>
                   <div className="content__blog-col posts">
                        <Link to="/article">
                            <Card />
                        </Link>
                   </div>
               </div>
            </React.Fragment>
        )
    }
}

export default Blog;
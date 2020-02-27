import React from 'react';
import {Link } from 'react-router-dom';

class Blog extends React.Component {
    render(){
        return (
            <React.Fragment>
                <div className="content__category">
                    <Link className="content__category-col tecnologia " to="/blog">
                        <div className="gradient">
                            <h4>Tecnología</h4>
                        </div>
                    </Link>
                    <Link className="content__category-col games " to="">
                        <div className="gradient">
                            <h4>Juegos</h4>
                        </div>
                    </Link>
                    <Link className="content__category-col music " to="">
                        <div className="gradient">
                            <h4>Música</h4>
                        </div>
                    </Link>
                </div>
            </React.Fragment>
        )
    }
}

export default Blog;

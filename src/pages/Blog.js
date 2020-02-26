import React from 'react';

import tech from '../Assets/images/tech.jpg';
import games from '../Assets/images/stream.jpg';
import music from '../Assets/images/music.jpg';

class Blog extends React.Component {
    render(){
        return (
            <React.Fragment>
                <div className="content__Blog">
                    <div className="tecnologia content__Blog-col ">
                        <div className="gradient">
                            Tecnología
                        </div>
                    </div>
                    <div className=" content__Blog-col games">
                        <div className="gradient">
                            Juegos
                        </div>
                    </div>
                    <div className="content__Blog-col music">
                        <div className="gradient">
                            Música
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Blog;

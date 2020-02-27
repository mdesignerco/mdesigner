import React from 'react';

class Card extends React.Component {
    render(){
        return(
            <div className="card">
                    <img src="" className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">
                        Hello
                    </h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        )
    }

}

export default Card;
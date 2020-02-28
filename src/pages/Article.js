import React from 'react';

import image from '../Assets/images/stream.jpg';
import profile from '../Assets/images/burger.jpg';
import cover from '../Assets/images/cover.jpg';

class Article extends React.Component {
    render(){
        return (
            <React.Fragment>
                <div className="content__article">
                    <div className="content__article-col">
                        <div className="profile">
                            <div className="profile__cover">
                                <div className="profile__cover-img"  style={{background: `url("${cover}") no-repeat top right `}} ></div>
                                <img src={profile} alt="" className="profile__cover-imgProfile"/>
                            </div>
                            <div className="profile__body">
                                <h3 className="profile__body-title">JmcGraphics</h3>
                                <span className="profile__body-description">
                                    Diseñador gráfico y web. Streamer juegos como: PUBG, CS:GO...
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="content__article-col">
                            <h1 className="content__article-title">Tecnología</h1>
                            <p className="content__article-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae rhoncus elit, id fermentum nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur at ex condimentum, malesuada ipsum tincidunt, vestibulum turpis. Quisque mattis erat lacus, ac tincidunt ex porttitor eget. Quisque sed ullamcorper leo. Maecenas et mattis elit. Suspendisse scelerisque nulla nec sapien pharetra, non pellentesque nibh bibendum.
                                Nunc eget nisi posuere felis venenatis ornare. Maecenas sit amet mollis sem, ut volutpat dui. Ut accumsan lorem id condimentum ullamcorper. 
                            <br/>
                                <img src={image} alt=""/>
                                In ut augue eleifend, mattis diam eget, sodales odio. Quisque ullamcorper ipsum et feugiat dapibus. Mauris varius cursus velit eu dictum. Quisque sed malesuada lorem. Fusce quis massa non ipsum porttitor porttitor. Curabitur accumsan, velit a pharetra aliquam, nulla turpis fringilla sem, sollicitudin porttitor orci magna vel purus. Phasellus at mattis enim.
                                Duis sed nibh nisl. Vivamus varius, dolor at dignissim fringilla, lectus quam cursus sem, vel efficitur turpis leo laoreet mi. Integer interdum felis arcu, id commodo massa efficitur vitae. Sed sed pellentesque orci. Donec odio neque, suscipit nec ultricies non, semper id lorem. Etiam sit amet nibh nibh. Fusce tempor arcu et convallis tempus. Duis tempus mi a turpis tincidunt, vel tempor dui sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et eleifend tellus. Nulla vulputate posuere auctor. Sed volutpat volutpat molestie. Duis rhoncus sagittis lectus. Nulla eget rutrum libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce auctor nisl ut congue luctus.
                                Sed molestie, nunc in malesuada rhoncus, odio libero sollicitudin erat, vitae condimentum risus lorem nec dolor. Cras porta diam sit amet augue iaculis ultrices. Aenean sit amet mi id magna laoreet iaculis. Cras nec nunc rhoncus, porttitor lorem ultricies, auctor eros. Phasellus rhoncus purus ut tempus tristique. Duis turpis augue, vestibulum vel est at, euismod sodales magna. Nam hendrerit ultricies consectetur. Ut ac tortor vel mi sagittis fringilla sit amet at magna. Morbi vel molestie augue. Donec commodo purus quis metus facilisis tempus. Duis a consequat mauris.
                                Maecenas finibus vel dolor eget eleifend. In tristique ultrices mauris quis consequat. Praesent eget pharetra nulla. Nunc quis nisi et enim congue molestie. Cras vestibulum nisl sed arcu placerat, sit amet accumsan enim dignissim. Nullam volutpat ut quam eu pharetra. Duis imperdiet, mauris tempus facilisis elementum, sapien nulla pretium mauris, sit amet venenatis mi libero eu risus. Aenean rhoncus orci a interdum hendrerit. Phasellus eget malesuada dui. Integer ut risus quam. Quisque finibus porttitor nunc a molestie. Suspendisse vel massa id arcu consequat facilisis. Sed efficitur efficitur aliquam.
                            </p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Article;
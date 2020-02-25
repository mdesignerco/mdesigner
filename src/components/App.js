import React from 'react';
import '../Assets/styles/App.scss';
import '../Assets/font/style.scss';


import logo from  '../Assets/images/Logo_mdesigner_2020_Color.svg';
import logo_header from '../Assets/images/Logo_mdesigner_2020_Oscura.svg'
import blackboy from '../Assets/images/blackboy.png';
import jmcgraphics from '../Assets/images/jmcgraphics.png';
import beefbull from '../Assets/images/beefbull.png';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {isToggleOn: true};
    this.className = '';
    this.handleClick = this.handleClick.bind(this);
  }

 
  handleClick = (e) =>{
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));

    if (this.className === 'is-close' || this.className === '' ){
      this.className= 'is-active';
    }else if(this.className === 'is-active'){
      this.className= 'is-close';
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <nav  className="nav__menu">
            <div className="nav__menu-container">
              <img  className="nav__menu-img" src={logo} alt="logo"/>
              <button onClick={this.handleClick} className="content__icon">
                <div className="content__icon-menu"></div>
                <div className="content__icon-menu"></div>
                <div className="content__icon-menu"></div>
              </button>
              <ul className={`nav__menu-items ${this.className}`}>
                <li className="nav__menu-item"><a Link=""> Home 2.0 </a></li>
                <li className="nav__menu-item"><a Link=""> Blog  3. 0</a></li>
                <li className="nav__menu-item"><a Link=""> Más de mi </a></li>
                <li className="nav__menu-item"><a Link=""> Contacto </a></li>
              </ul>
            </div>
          </nav>
        </header>
        <section className="content">
          <div className="hero bg-img">
            <div className=" down-title ">
                <img className="img-title align-center" src={logo_header} alt="Mdesigner"/>
            </div>
            <div className="p-3">
                <h3 className="text-3">Sacando lo mejor de ti </h3>
            </div>
              <ul className="nav__social">
                <li className="nav__social-item"> <a Link=""> <i className="icon-facebook"></i> </a> </li>
                <li className="nav__social-item"> <a Link=""> <i className="icon-pinterest"></i> </a> </li>
                <li className="nav__social-item"> <a Link=""> <i className="icon-linkedin"></i> </a> </li>
                <li className="nav__social-item"> <a Link=""> <i className="icon-instagram"></i> </a> </li>
              </ul>
          </div>
          <div className="associate solid-border">
            <h2 className="text-2">Marcas Asociadas</h2> 
            <ul className="menu__associate">
              <li className="menu__associate-item"><img className="menu__associate-img" src={blackboy} alt=""/></li>
              <li className="menu__associate-item"><img className="menu__associate-img" src={jmcgraphics} alt=""/></li>
              <li className="menu__associate-item"><img className="menu__associate-img" src={beefbull} alt=""/></li>
            </ul>
          </div>
        </section>
        <footer>
          <p >Copyright © 2019  <a Link="">mdesigner.co </a></p>
        </footer>
      </div>
    );
  }
}

export default App;

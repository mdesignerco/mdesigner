import React from 'react';
import { Link } from 'react-router-dom';

import logo from  '../Assets/images/Logo_mdesigner_2020_Oscura.svg';

class Navbar extends React.Component {
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
    return(
      <header className="App-header">
        <nav  className="nav__menu">
            <div className="nav__menu-container">
            <Link to="/"><img  className="nav__menu-img" src={logo} alt="logo"/></Link>
            <button onClick={this.handleClick} className="content__icon">
                <div className="content__icon-menu"></div>
                <div className="content__icon-menu"></div>
                <div className="content__icon-menu"></div>
            </button>
            <ul className={`nav__menu-items ${this.className}`}>
                <li className="nav__menu-item"><Link to="/"> Home </Link></li>
                <li className="nav__menu-item"><Link to="/category"> Blog </Link></li>
                <li className="nav__menu-item"><Link to=""> Más de mi </Link></li>
                <li className="nav__menu-item"><Link to=""> Contacto </Link></li>
            </ul>
            </div>
        </nav>
      </header>
    )
  }
}

export default Navbar;
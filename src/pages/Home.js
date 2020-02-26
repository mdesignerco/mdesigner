import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/styles/App.scss';
import '../Assets/font/style.scss';

import logo_header from '../Assets/images/Logo_mdesigner_2020_Oscura.svg'
import blackboy from '../Assets/images/blackboy.png';
import jmcgraphics from '../Assets/images/jmcgraphics.png';
import beefbull from '../Assets/images/beefbull.png';


class App extends React.Component {
  
    render(){
      return (
        <React.Fragment>
          <section className="content bg-img">
            <div className="hero ">
              <div className=" down-title ">
                  <img className="img-title align-center" src={logo_header} alt="Mdesigner"/>
              </div>
              <div className="p-3">
                  <h3 className="text-3">Sacando lo mejor de ti </h3>
              </div>
                <ul className="nav__social">
                  <li className="nav__social-item"> <Link to="" > <i className="icon-facebook"></i> </Link> </li>
                  <li className="nav__social-item"> <Link to="" > <i className="icon-pinterest"></i> </Link> </li>
                  <li className="nav__social-item"> <Link to="" > <i className="icon-linkedin"></i> </Link> </li>
                  <li className="nav__social-item"> <Link to="" > <i className="icon-instagram"></i> </Link> </li>
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
        </React.Fragment>
      );
    }
  }
  
  export default App;
  
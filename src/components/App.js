import React, { Component } from 'react';
import '../css/App.css';
import Formulariobusqueda from './Formulariobusqueda';
import Footer from './Footer';

class Header extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="header-wrapper">
          <p>Componente header</p>
        </div>
        <Formulariobusqueda/>
        <Footer/>
      </div>
    );
  }
}

export default Header;

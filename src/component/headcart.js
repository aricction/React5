import React, { Component } from 'react';
import { Button , Nav, Navbar , NavItem} from 'reactstrap';
import { Link } from 'react-router-dom';

class Headercart extends Component {
  render(){
  return (
    <nav className="nav-wrapper">
                  <div className="container">
                      <ul className="right">
                          <li><Link to="/">Shop</Link></li>
                          <li><Link to="/cart">My cart</Link></li>
                          <li><Link to="/cart"><i className="bi bi-cart">shopping_cart</i></Link></li>
                      </ul>
                  </div>
              </nav>
  );
  }
}


export default Headercart;

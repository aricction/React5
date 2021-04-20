import React, { Component } from 'react';
import { Button , Navbar,NavItem, NavLink , Nav} from 'reactstrap';
import { Link } from 'react-router-dom';

class Headercart extends Component {
  render(){
  return (
    <Navbar expand>

                  <div className="container">
                  <div class="row row-header">
                        <NavItem className="nav-link">

                          <span><Link to="/">Shop</Link></span>
                         </NavItem>
                         <NavItem className="nav-link">
                          <span><Link to="/cart">My cart</Link></span>
                           </NavItem>

                  </div>
                  </div>
                  <div class=" circle">
                <NavItem className="nav-link">
               <span><Link to="/cart"><i className="bi bi-cart text-success"></i></Link></span>
                     </NavItem>
                     </div>
              </Navbar>



  );
  }
}


export default Headercart;

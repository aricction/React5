import React, { Component } from 'react';
import { Button , Navbar,NavItem, NavLink , Nav} from 'reactstrap';
import { Link } from 'react-router-dom';

class Headercart extends Component {
  render(){
  return (
    <Navbar expand>

                  <div className="container">
                  <div class="row ">
                        <NavItem className="nav-link col">

                          <span><Link to="/">Shop</Link></span>
                         </NavItem>
                         <NavItem className="nav-link col">
                          <span><Link to="/cart" style={{ color: '#9c88ff' }}>My cart</Link></span>
                           </NavItem>

                  </div>
                  </div>
                  <div class=" circle">
                <NavItem className="nav-link">
               <span><Link to="/cart" ><i className="bi bi-cart text-primary" ></i></Link></span>
                     </NavItem>
                     </div>
        </Navbar>



  );
  }
}


export default Headercart;

import React, { Component } from 'react';
import { Navbar ,NavbarBrand , Nav,Collapse ,NavItem, NavbarToggler } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

  constructor(props){
    super(props);
    this.state = {
      isNavOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav(){
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }
  render(){


    return(
      <div className="Header">
      <React.Fragment>
         <Navbar dark expand="md">
         <div className="container">
         <NavbarToggler onClick={this.toggleNav} />

                <NavbarBrand className="mr-auto" href="/">
                <img src="assets/img/logo2.png" alt="Gourmet" height="50px" width="100"/>
                 </NavbarBrand>
                 <Collapse isOpen={this.state.isNavOpen} navbar>
                 <Nav navbar>
                     <NavItem>
                     <NavLink className="nav-link" to="">
                        <span className="bi bi-house"></span> home
                       </NavLink>
                     </NavItem>

                     <NavItem>
                     <NavLink className="nav-link text-dark" to="./story">
                        <span className="bi bi-shop"></span> Our story
                       </NavLink>
                     </NavItem>

                     <NavItem>
                     <NavLink className="nav-link text-dark" to="./shop">
                        <span className="bi bi-cart-plus"></span> Order online
                      </NavLink>
                     </NavItem>

                     <NavItem>
                     <NavLink className="nav-link text-dark" to="./menu">
                        <span className="bi bi-list"></span> Menu
                      </NavLink>
                     </NavItem>

                     <NavItem>
                     <NavLink className="nav-link " to="./contact">
                        <span className="bi bi-person-lines-fill"></span> Contact
                      </NavLink>
                     </NavItem>




                  </Nav>
      </Collapse>
      </div>
      </Navbar>


      </React.Fragment>
      </div>

    );
  }
}

export default Header;

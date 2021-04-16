import React, { Component } from 'react';
import { Navbar ,NavbarBrand ,Nav ,Collapse ,NavItem, NavbarToggler,
Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleNav(){
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  toggleModal() {
    this.setState({
        isModalOpen: !this.state.isModalOpen
    });
  }

  handleLogin(event) {
      this.toggleModal();
      this.props.loginUser({username: this.username.value, password: this.password.value});
      event.preventDefault();

  }

  handleLogout() {
      this.props.logoutUser();
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
                  <Nav className="ml-auto" navbar>
                      <NavItem>

                              <Button>
                                  <span className="fa fa-sign-in fa-lg"></span> Login

                                      <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                      : null

                              </Button>
                              :
                              <div>
                              <div className="navbar-text mr-3"></div>
                              <Button >
                                  <span className="fa fa-sign-out fa-lg"></span> Logout
                                
                                      <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                      : null

                              </Button>
                              </div>


                      </NavItem>
                  </Nav>
      </Collapse>
      </div>
      </Navbar>

       <Modal>
         <ModalHeader>Login</ModalHeader>
         <ModalBody>
             <Form>
                <FormGroup>
                   <Label Htmlfor="username">Username</Label>
                   <Input type="text" id="username" name="username" />

                </FormGroup>
                <FormGroup>
                   <Label Htmlfor="password">Password</Label>
                   <Input type="Password" id="password" name="password" />

                </FormGroup>
                <FormGroup>
                <Label check>
                   <Input type="checkbox" name="remember" />
                   Remember me

                </Label>
                </FormGroup>
                <Button type="submit" value="submit" color="primary">Login</Button>
             </Form>
         </ModalBody>
       </Modal>


      </React.Fragment>
      </div>

    );
  }
}

export default Header;

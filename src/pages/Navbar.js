import React, { useContext, useEffect, Fragment }from 'react';
import { Button , NavbarBrand , Nav  ,NavItem } from 'reactstrap';
import "bootstrap/js/src/collapse.js";     
import { NavLink, Link} from 'react-router-dom';
import authContext from '../component/auth/AuthContext';

const Navbar = () => {
  
  const authcontext = useContext(authContext);
  const {user , isAuthenticated, logout } = authContext;

  
  const Exit = () => {
    logout();
  };  

   const authlink = (
     <Fragment>
    


            <li className='nav-item'>
              <a onClick={Exit} className='nav-link text-dark' href='!#'>
                  Logout
              </a>  
            </li>
     </Fragment>
   );

   const unauthlink = (
     <Fragment>
      
          <NavItem> 
           <NavLink className="nav-link" to="">
             <span className="bi bi-house"></span> Home
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
            <NavLink className="nav-link  text-dark" to="./contact">
              <span className="bi bi-person-lines-fill"></span> Contact
            </NavLink>
           </NavItem>
                    
                    
     
            <NavItem className="">
             <NavLink className="nav-link  text-dark" to="./register">
              <span className=""></span> Sign up
             </NavLink>
            </NavItem>

             
          

            <NavItem className='login' >
              <NavLink className="col nav-link  text-dark" to="./login">
                <span className=""></span> Login
              </NavLink>
            </NavItem>

            <li className='nav-item'>
           <Link className='nav-link' to='/'>
            welcome{user && user.name}
              </Link>
              </li>

     </Fragment>
   )

    return (

        
          <div className="navbar navbar-expand-lg navbar-dark ">
               
              <div className="container">
                <NavbarBrand className="mr-auto" href="/">
                <img src="assets/img/logo2.png" alt="Gourmet" height="50px" width="100"/>
                 </NavbarBrand>
                  <button className="navbar-toggler" type="button" 
                    data-toggle="collapse" data-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
      
                   <span class="navbar-toggler-icon"></span>
                  </button>
                     <div className="collapse navbar-collapse" id="navbarNav">
                          < ul className="navbar-nav">
                    
                           { isAuthenticated ? authlink : unauthlink}
                  
                           </ul>
                      </div>
                </div>
          </div>

    );
};

export default Navbar;

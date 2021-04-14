import React, { Component } from 'react';
import Header from './HeaderComponent';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
class Menu extends Component{
  render(){
    return (

      <div className="container">
         <div className="row">
           <Breadcrumb>
             <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
             <BreadcrumbItem active> Menu </BreadcrumbItem>
           </Breadcrumb>
          < div className="col-12">
               <div className="text3 row justify-content-center">
                   <h1> MENU </h1>
               </div>
                <hr />
           </div>
           </div>
           </div>

           



    );
  }
}

export default Menu;

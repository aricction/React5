import React, { Component } from 'react';
import Header from './HeaderComponent';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
class Contact extends Component {
  render(){
    return(



      <div className="container">
            <div className="row">
               <Breadcrumb>
                   <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                   <BreadcrumbItem active>Contact</BreadcrumbItem>
              </Breadcrumb>
      <div className="col-12">
          <div className="text3 row justify-content-center">
              <h1> CONTACT US </h1>
          </div>
           <hr />
      </div>
      </div>
      
      <div className="row row-content">
        <div className="col-12">
            <h3>Location information</h3>
        </div>
        <div class="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
            121, Clear water Bay road <br />
            Clear water bay, kowloon <br />
            <i className="fa fa-phone"></i>: +987654321 <br />
            <i class="fa fa-fax"></i>: +852 8765 4321 <br />
            <i class="fa fa-envelope"></i>:
            <a href="mailto:confusion@food.net">Gourmet@food.net</a>
            </address>
         </div>
           <div className="col-12 col-sm-6 offset-sm-1">
          <h5> Map of the Location </h5>

           </div>
             <div className="col-12 col-sm-11 offset-sm-1">
             <div className="btn-group" role="group">

             </div>
             </div>
         </div>
        </div>


    );
  }
}

export default Contact;

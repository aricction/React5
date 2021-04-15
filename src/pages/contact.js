import React, { Component } from 'react';
import Header from './HeaderComponent';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';

class Contact extends Component {

  constructor(props){
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      telnumber: '',
      email: '',
      agree:false,
      contactType: 'Tel.',
      message: ''
    }
  }
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
         <div className="row row-content">
            <div className="col-12">
            <h3>Send us Your Feedback</h3>
            </div>
            <div className="col-12 col-md-9">
               <Form>
                  <FormGroup row>
                  <Label Htmlfor="firstname" md="{2}"> First Name</Label>
                  <Col md={10}>
                  <Input type="text" id="firstname" name="firstname"
                     placeholder="First Name" value={this.state.firstname} />
                  </Col>
                  </FormGroup>

                  <FormGroup row>
                  <Label Htmlfor="lasttname" md="{2}"> Last Name</Label>
                  <Col md={10}>
                  <Input type="text" id="lastname" name="lastname"
                     placeholder="Last Name" value={this.state.lastname} />
                  </Col>
                  </FormGroup>

                  <FormGroup row>
                  <Label Htmlfor="telnum" md="{2}"> Contact Tel</Label>
                  <Col md={10}>
                  <Input type="tel" id="telnum" name="telnum"
                     placeholder="Tel. Number" value={this.state.telnum} />
                  </Col>
                  </FormGroup>

                  <FormGroup row>
                  <Label Htmlfor="email" md="{2}"> Email</Label>
                  <Col md={10}>
                  <Input type="email" id="email" name="email"
                     placeholder="Email" value={this.state.email} />
                  </Col>
                  </FormGroup>

                  <FormGroup row>
                     <Col md={{size: 6, offset: 2}}>
                     <FormGroup check>
                         <Label check>
                           <Input type="checkbox"  name="agree"
                           checked={this.state.agree} /> {' '}
                           <strong>May we contact you?</strong>
                           </Label>
                     </FormGroup>
                     </Col>
                     <Col md={{size: 3, offset: 1}} >
                     <Input type="select" name="contactType"
                                value={this.state.contactType}>
                        <option>Tel.</option>
                        <option>Email</option>
                      </Input>
                     </Col>

                  </FormGroup>

                    <FormGroup row>
                    <Label Htmlfor="message" md="{2}"> Your Feedback</Label>
                    <Col md={10}>
                    <Input type="textarea" id="message" name="message" rows="12"
                    value={this.state.message} />
                    </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Col md={{size:10, offset:2}}>
                       <Button type="submit"  color="primary">
                          Send Feedback
                       </Button>
                       </Col>
                    </FormGroup>


               </Form>
               </div>
            </div>
        </div>


    );
  }
}

export default Contact;

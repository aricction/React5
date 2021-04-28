import React, { Component} from 'react';
import { Form , FormGroup, Label, Input , Row, Col,Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Footer from '../footer';
import Payment from './bill';
class Address extends Component {

  render (){
    return (

      <div className='container'>
      <div className='row'>
      <Breadcrumb>
      <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
      <BreadcrumbItem><Link to='/shop'>Order Online</Link></BreadcrumbItem>
      <BreadcrumbItem>Checkout</BreadcrumbItem>
      </Breadcrumb>
      </div>
        <hr />
        <p ><h3>Shipping address</h3></p>
      <Form>
      <Row form>
       <Col md={4}>
        <FormGroup>
        <Label>First name</Label>
        <Input type='text' name='firstname' placeholder='First Name' />
         </FormGroup>
        </Col>
        <Col md={4}>
         <FormGroup>
           <Label for="examplePassword">Last Name</Label>
           <Input type="text"  placeholder='Last Name' />
         </FormGroup>
       </Col>
       </Row>
       <Row form>
         <Col md={4}>
       <FormGroup>
        <Label for="phone no">Phone no</Label>
        <Input type="text" name="phone no"  placeholder="phone no"/>
      </FormGroup>
</Col>

  <Col md={4}>
<FormGroup>
 <Label for="Email">Email</Label>
 <Input type="email" name="email"  placeholder="Email"/>
</FormGroup>
</Col>

</Row>
  <Row form>
     <Col sm={8}>
        <FormGroup>
              <Label for="exampleAddress">Address</Label>
              <Input type="text" name="address" id="exampleAddress" placeholder="street name"/>
              <Input type="text" name="address" id="exampleAddress" placeholder="Apartment, house no."/>
        </FormGroup>
       </Col>
     </Row>
 <Row>
   <Col sm={4}>
    <FormGroup>
     <Label>Postal Code</Label>
     <Input type="text" placeholder="postal code" />
    </FormGroup>

   </Col>
   <Col sm={4}>
    <FormGroup>
     <Label>Town/city</Label>
     <Input type="text" placeholder="Town" />
    </FormGroup>

   </Col>
 </Row>

  </Form>
<Payment />
      </div>


    );
  }
}

export default Address;

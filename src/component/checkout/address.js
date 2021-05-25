import React, { Component , useState} from 'react';
import {Button, Form , FormGroup, Label, Input ,
   Modal, ModalHeader, ModalBody, ModalFooter,
    Row, Col,Breadcrumb, BreadcrumbItem , TabContent, TabPane, Nav,
  NavItem , Alert } from 'reactstrap';
import { Link , NavLink } from 'react-router-dom';
import Footer from '../footer';
import Payment from './bill';
import classnames from 'classnames';


class Address extends Component {


constructor(props){
  super(props);

  this.state= {
    isModalOpen: false
  };
  this.toggleModal = this.toggleModal.bind(this);

  this.toggle = this.toggle.bind(this);
  this.state = {
    activeTab: '1'
  };

}

toggle(tab) {
  if(this.state.activeTab !== tab) {
    this.setState({
      activeTab: tab
    });
  }
}
toggleModal(){
  this.setState({
    isModalOpen: !this.state.isModalOpen
  });
}


  render (){


    return (

      <div className='container '>
      <div className='row '>
      <Breadcrumb>
      <BreadcrumbItem><Link to='/home'  style={{ color: '#00b894' }}>Home</Link></BreadcrumbItem>
      <BreadcrumbItem><Link to='/shop'  style={{ color: '#e17055' }}>Order Online</Link></BreadcrumbItem>
      <BreadcrumbItem>Checkout</BreadcrumbItem>
      </Breadcrumb>
      </div>

        <hr />
      <Row>
        <Col  xs="6" sm="4" md="4">
        <Nav tabs vertical pills>
          <NavItem>
            <NavLink to='#!'className={classnames({active: this.state.activeTab === '1'})}
            onClick={ () => {
              this.toggle('1');
            }}><Button type='submit' color='info' >
              Shipping address
            </Button>
              
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='#!'className={ classnames({active: this.state.activeTab === '2'})}
            onClick={ () => {
              this.toggle('2');
            }}>
              <Button className='mt-2'  color='info' > Payment method </Button>
             
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink to='#!'className={ classnames({active: this.state.activeTab === '3'})}
            onClick={ () => {
              this.toggle('3');
            }}>
              <Button className='mt-2'  color='info' >   Order summary </Button>
             
            </NavLink>
          </NavItem>
          </Nav>
        </Col>

        <Col >
        <TabContent   activeTab={ this.state.activeTab}>
          <TabPane tabId='1'>
          <h4>Shipping Address</h4>
          <hr/>
      <Form >
      <Row >
       <Col md={4}>
        
        <FormGroup>
        
        <Input type='text' name='firstname' placeholder='First Name' />
         </FormGroup>
        </Col>
        <Col md={4}>
         <FormGroup>
           
           <Input type="text"  placeholder='Last Name' required/>
         </FormGroup>
       </Col>
       </Row>
       <Row >
         <Col md={4}>
       <FormGroup>
   
        <Input type="text" name="phone no" required placeholder="phone no"/>
      </FormGroup>
    </Col>

  <Col md={4}>
<FormGroup>

 <Input type="email" name="email" required placeholder="Email"/>
</FormGroup>
</Col>

</Row>
  <Row >
     <Col sm={8}>
        <FormGroup>
              <Label for="exampleAddress">Address</Label>
              <Input type="text" required name="address" id="exampleAddress" placeholder="street name"/>
              <Input type="text" className='mt-2' required name="address" id="exampleAddress" placeholder="Apartment, house no."/>
        </FormGroup>
       </Col>
     </Row>
 <Row>
   <Col sm={4}>
    <FormGroup>

     <Input type="text" placeholder="postal code" required />
    </FormGroup>

   </Col>
   <Col sm={4}>
    <FormGroup>

     <Input type="text" placeholder="Town" />
    </FormGroup>

   </Col>
 </Row>

  </Form>
  
  <Button className="button" color="primary"><span>Save & deliver here</span></Button>
          </TabPane>

          <TabPane tabId='2'> 
            <Payment />
          </TabPane>

          <TabPane tabId='3'> 
            <h3> content 3 </h3>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
               <div>
               <Alert color='success'>
                     <h4 className='alert-heading'>Congrats !</h4>
                   <p> your order has been place</p>
                   <p> Order :</p>
                   <p> address :</p>
                   <p> amount :</p>
                   <p> Thank you for shopping with us.</p>
               </Alert>
               </div>

            </Modal>
             <Button onClick={this.toggleModal} color="primary">
             <span>Confirm order</span>
             </Button>
          </TabPane>
        </TabContent>
        </Col>
      </Row>


      </div>


    );
  }
}

export default Address;

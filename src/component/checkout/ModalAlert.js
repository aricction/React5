import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter , Alert} from 'reactstrap';

const ModalAlert = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="success" onClick={toggle}>Confirm Order</Button>
      <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        toggle={toggle} className={className}>
    
        <Alert color='success'  toggle={toggle}>
      

                     <h4 className='alert-heading'>Congrats !</h4>
                   <p> your order has been place</p>
                   <p> Order :</p>
                   <p> address :</p>
                   <p> amount :</p>
                   <p> Thank you for shopping with us.</p>
               </Alert>
      </Modal>
    </div>
  );
}

export default ModalAlert;
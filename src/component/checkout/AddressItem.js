import React, {useContext} from 'react';
import ShipContext from '../Shipping/ShipContext';

const Addressitem = ({ address }) => {
    const shipContext = useContext(ShipContext);
    const {firstname, lastname, email, phone} = address;
    return (
         <div >
         <div className=''>
         <p>{address.firstname}</p>
         <p>{address.lastname}</p>
         <p>{address.email}</p>  
         <p>{address.phone}</p>         

         </div>
         </div>
    )
}
export default Addressitem;
import React, {useContext } from 'react';
import EmployeeContext from './employee/EmployeeContext';

const Employeeitem = ({ employee }) => {
   const employeeContext = useContext(EmployeeContext);
   const {deleteEmployee, updateEmployee, setCurrent, clearCurrent } = employeeContext;
    const {id, firstname, lastname, phone, email, designation, salary} = employee;
    const onDelete = () => {
       deleteEmployee(id);
       clearCurrent();
    };

    return (
        <div>
            <div className="card mt-3">
      
            <div className="card-body">
            <p className="card-text">
                firstname: {employee.firstname}
             </p>
             <p className="card-text">
                lastname: {employee.lastname}
             </p>
             <p className="card-text">
                Email: {employee.email}
             </p>
             <p className="card-text">
               Phone:  {employee.phone}
             </p>
             <p className="card-text">
               address:  {employee.address}
             </p>
             <p className="card-text">
               postalcode:  {employee.postalcode}
             </p>
             <p className="card-text">
               town:  {employee.town}
             </p>
               <a href="#" onClick={() => setCurrent(employee)} className="btn btn-primary">edit</a>
               <a href="#" onClick={onDelete}className="btn btn-danger ml-3">delete</a>
           </div>
           </div>
        </div>
    )
}
export default Employeeitem;
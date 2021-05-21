import { PromiseProvider } from 'mongoose';
import React, { useContext, useState, useEffect} from 'react';
import AuthContext from './auth/AuthContext';

 
 const RegisterUser = props => {
     const authContext = useContext(AuthContext);
      
     const { registeruser , isAuthenticated } = authContext;
    
     useEffect(() => {
         if(isAuthenticated){
             props.history.push("/");
         }
     }, [isAuthenticated, props.history]);


     const [user, setuser] = useState({
         name: '',
         email: '',
         password: '',
         cpassword: ''
     });

     const {name, email, password, cpassword} = user;

     const onChange = e => setuser({
         ...user, [e.target.name]: e.target.value
     });

     const onSubmit = e => {
         e.preventDefault();
         registeruser ({
             name,
             email,
             password
         });
         
     };
     return (
        <form onSubmit={onSubmit}>
        <div className="row">
            <div className="col-sm-4 ml-5">
            <h3>Register as new user</h3>
         <div className="form-group">
              <label>Enter name</label>
          <input className='form-control' type='text' name='name' required value={name} onChange={onChange} />
          </div>
          <div className="form-group">
              <label>Enter email</label>
          <input className='form-control' type='email' name='email'required value={email} onChange={onChange} />
          </div>
          <div className="form-group">
              <label>Enter password</label>
          <input className='form-control' type='password' required name='password' value={password} onChange={onChange} />
          </div>
          <div className="form-group">
              <label>Confirm password</label>
          <input className='form-control' type='password' required name='cpassword' value={cpassword} onChange={onChange} />
          </div>
          <input name="button" className="btn btn-success" type='submit' value='Register ' />


            </div>
        </div>
        

    </form>

     )
 }

 export default RegisterUser;
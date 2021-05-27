import React, { useState, useContext, useEffect } from 'react';
import AuthContext from './auth/AuthContext';
import AllShip from './checkout/AllShip';
const Login = props => {

    const authContext = useContext(AuthContext);
      
    const { loginuser, isAuthenticated } = authContext;

    useEffect(() => {
        if (isAuthenticated){
            props.history.push("/");
        }
    }, [isAuthenticated, props.history]);


    const [user, setuser] = useState  ({
        
        email: '',
        password: ''
        
    });

    const {email, password} = user;

    const onChange = e => setuser({
        ...user, 
        [e.target.name]: e.target.value
    });

    const onSubmit = e => {
        e.preventDefault();
        loginuser({
            email,
            password
        });
        
    };
    return (

          <div className='container'><div className='col'>
        <form onSubmit={onSubmit}>
        <div className="row">
            <div className="col-sm-4 ml-5">
            <h3>Login user</h3>
        
          <div className="form-group">
              <label>Enter email</label>
          <input className='form-control' type='email' name='email' required value={email} onChange={onChange} />
          </div>
          <div className="form-group">
              <label>Enter password</label>
          <input className='form-control' type='password' required name='password' value={password} onChange={onChange} />
          </div>
         
          <input name="button" className="btn btn-success" type='submit' value='Login ' />


            </div>
        </div>
        

    </form>
    </div></div> 
 
    );
} 

export default Login;
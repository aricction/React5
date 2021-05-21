import React, { useState, } from 'react';

const Login = () => {
    const [user, setuser] = useState({
        
        email: '',
        password: ''
        
    });

    const {email, password} = user;

    const onChange = e => setuser({
        ...user, [e.target.name]: e.target.value
    });

    const onSubmit = e => {
        e.preventDefault();
        console.log("log in user ..")
    };
    return (

        <form onSubmit={onSubmit}>
        <div className="row">
            <div className="col-sm-4 ml-5">
            <h3>Login user</h3>
        
          <div className="form-group">
              <label>Enter email</label>
          <input className='form-control' type='email' name='email'required value={email} onChange={onChange} />
          </div>
          <div className="form-group">
              <label>Enter password</label>
          <input className='form-control' type='password' required name='password' value={password} onChange={onChange} />
          </div>
         
          <input name="button" className="btn btn-success" type='submit' value='Login ' />


            </div>
        </div>
        

    </form>
    );
} 

export default Login
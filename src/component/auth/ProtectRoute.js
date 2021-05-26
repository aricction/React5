import React, {useContext } from 'react';
import {Route , Redirect} from 'react-router-dom';
import AuthContext from './AuthContext';

const ProtectedRoute = ({ component: Component, ...rest}) => {
    const authcontext = useContext(AuthContext);
    const {isAuthenticated, loading} = authcontext;
    return (
        <Route
            {...rest}
            render = {props =>
            !isAuthenticated  ?(
                <Redirect to="/login" />

              
            ): (
                <Component {...props} />
            )}

        />
    );
};

export default ProtectedRoute;
import React, { Component } from 'react';
import Home from './home';
import Contact from './contact';
import Header from './HeaderComponent';
import Menu from './menu';
import Story from './story';
import Shop from './shop';
import Address from '../component/checkout/address';
import Cart from '../component/Cart'
import Footer from'../component/footer';
import { Switch, Route, Redirect } from 'react-router-dom';
import RegisterUser from '../component/Register';
import Login from '../component/Login';
import UserAuth from '../component/auth/AuthState';
import AuthToken from '../component/auth/tokenAuth';

 
  if(localStorage.token){
      AuthToken(localStorage.token);
  }

class Main extends Component {


render() {

  const HomePage = () =>{
    return(

      <Home />
    );
  }
  return(
    <div>

    <Header auth={this.props.auth}
    loginUser={this.props.loginUser}
    logoutUser={this.props.logoutUser}/>


  <UserAuth>
     <Switch>
      <Route path="/home" component={HomePage} />
      <Route path="/story" component={Story} />
      <Route exact path ="/contact" component={()=><Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} />} />
      <Route path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
      <Route path="/shop" component={Shop} />
      <Route path="/cart" component={Cart} />
      <Route path="/address" component={Address} />
      <Route path="/register" component={RegisterUser} />
      <Route path="/login" component={Login} />
      <Redirect to="/home" />
     </Switch>
     </UserAuth>
    </div>

  );
 }
}

export default Main;

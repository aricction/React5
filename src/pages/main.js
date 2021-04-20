import React, { Component } from 'react';
import Home from './home';
import Contact from './contact';
import Header from './HeaderComponent';
import Menu from './menu';
import Story from './story';
import Shop from './shop';

import Cart from '../component/Cart'
import Footer from'../component/footer';
import { Switch, Route, Redirect } from 'react-router-dom';




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



     <Switch>
      <Route path="/home" component={HomePage} />
      <Route path="/story" component={Story} />
      <Route exact path ="/contact" component={()=><Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} />} />
      <Route path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
      <Route path="/shop" component={Shop} />
      <Route path="/cart" component={Cart} />
      <Redirect to="/home" />
     </Switch>
    </div>

  );
 }
}

export default Main;

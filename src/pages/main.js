import React, { Component } from 'react';
import Home from './home';
import Contact from './contact';
import Header from './HeaderComponent';
import Menu from './menu';
import Story from './story';
import Shop from './shop';
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
    <Header />

     <Switch>
      <Route path="/home" component={HomePage} />
      <Route path="/story" component={Story} />
      <Route path="/contact" component={Contact} />
      <Route path="/menu" component={Menu} />
      <Route path="/shop" component={Shop} />
      <Redirect to="/home" />
     </Switch>
    </div>
  );
 }
}

export default Main;

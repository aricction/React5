import React,{ Component } from 'react';
import {Nav} from 'reactstrap';

class Footer extends Component {
render(){
  return(
    <div className="footer">
    <div className="container">
    <div className="row">
    <div className="col-4 offset-1 col-sm-2">
    <h5>Links</h5>
                  <ul className="list-unstyled">
                      <li><a href="#">Home</a></li>
                      <li><a href="#">Our story</a></li>
                      <li><a href="#">Resturant</a></li>
                      <li><a href="#">Contact</a></li>
                  </ul>

    </div>
    </div>
    <div class="row justify-content-center">
    <div class="col-auto">
        <p>© Copyright 2018 Gourmet Food</p>
    </div>
</div>
    </div>
    </div>

  );
}
}
export default Footer;

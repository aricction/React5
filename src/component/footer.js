import React,{ Component } from 'react';
import {Nav} from 'reactstrap';
import { Link } from 'react-router-dom';
class Footer extends Component {
render(){
  return(
    <footer class="footer">
      <div class="container">
      <div class="row">
          <div class="col-4 offset-1 col-sm-2">
              <h5>Links</h5>
                <ul class="list-unstyled">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/story">Our story</Link></li>
                    <li><Link to="/menu">Resturant</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
          </div>
          <div class="col-7 col-sm">
              <h5>Our Address</h5>

          </div>
          <div class="col-12 col-sm align-self-center">
              <div class="text-center">
                  <a href="http://google.com/+"><i class="fa fa-google-plus"></i></a>
                  <a href="http://www.facebook.com/profile.php?id="><i class="bi bi-facebook"></i></a>
                  <a href="http://www.linkedin.com/in/"><i class="bi bi-linkedin"></i></a>
                  <a href="http://twitter.com/"><i class="bi bi-twitter"></i></a>
                  <a href="http://youtube.com/"><i class="bi bi-youtube"></i></a>
                  <a href="mailto:"><i class="bi bi-envelope-open"></i></a>
              </div>
          </div>
      </div>
  <div class="row justify-content-center">
      <div class="col-auto">
          <p>© Copyright 2018 Gourmet Food & more</p>
      </div>
  </div>
  </div>
    </footer>

  );
}
}
export default Footer;

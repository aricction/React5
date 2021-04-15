import React, {Component} from 'react';
import { Link, NavLink } from 'react-router-dom';
import Header from './HeaderComponent';

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      isNavOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav(){
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render(){
    return (
      <div className="Home">



  <div id="loginModal" class="modal fade" role="dialog">
      <div class="modal-dialog modal-lg" role="content">
          <div class="modal-content">
              <div class="modal-header">
                  <h4 class="modal-title">Login</h4>
                  <button type="button" class="close" data-dismiss="modal">
                      &times;
                  </button>
              </div>
              <div class="modal-body">
                  <form>
                      <div class="form-row">
                          <div class="form-group col-sm-4">
                              <label htmlFor="emaildInput">Email Address</label>
                              <input type="email" class="form-control form-control-sm mr-1" id="emaildInput" placeholder="Enter email"/>
                          </div>

                          <div class="form-group col-sm-4">
                              <label class="sr-only" for="exampleInputPassword3">Password</label>
                              <input type="password" class="form-control form-control-sm mr-1" id="exampleInputPassword3" placeholder="Password"/>
                          </div>
                          <div class="col-sm-auto">
                              <div class="form-check">
                                  <input class="form-check-input" type="checkbox"/>
                                  <label class="form-check-label"> Remember me
                                  </label>
                              </div>
                          </div>
                      </div>
                      <div class="form-row">
                          <button type="button" class="btn btn-secondary btn-sm ml-auto" data-dismiss="modal">Cancel</button>
                          <button type="submit" class="btn btn-primary btn-sm ml-1">Sign in</button>
                      </div>

                  </form>

              </div>
          </div>
      </div>
  </div>


  <header >

    <div class="container">
        <div class="col">

            <div id="mycarousel" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active">
                        <img src="assets/img/food.jpg"  width="1200"alt="home"/>
                       <div class="carousel-caption  ">
                          <div class="text2">
                              <h1> Gourmet </h1>
                          </div>
                          <div class="">
                         <div class="">
                           <div class="text">
                       <h1> FOOD & MORE </h1>
                       </div>
                     </div>
                    </div>
                    </div>
                </div>

                <div class="carousel-item ">

                    <img  src="assets/img/c1.jpg" width="1200" alt="buffet"/>
                    <div class="carousel-caption  ">
                        <h2>Weekend Grand Buffet <span class="badge badge-danger">NEW</span></h2>
                        <p class="d-none d-sm-block ">Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person </p>
                    </div>
                </div>

                <div class="carousel-item">
                    <img src="assets/img/c3.jpg" alt="buffet"/>
                    <div class="carousel-caption ">
                        <h2>Weekend Grand Buffet <span class="badge badge-danger">NEW</span></h2>
                        <p class="d-none d-sm-block">Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person </p>
                    </div>
                </div>
            </div>
            <ol class="carousel-indicators">
              <li data-target="#mycarousel" data-slide-to="0" class="active"></li>
              <li data-target="#mycarousel" data-slide-to="1" class="active"></li>
              <li data-target="#mycarousel" data-slide-to="2" class="active"></li>

            </ol>
        </div>

      </div>
    </div>

    </header>
  <div class="container">
      <div class="row-content">
          <div class="col">

              <h1 class="col">Welcome</h1>

              <h4 class="col">TO THE RESTAURANT</h4>
              <p class="col-12 col-sm-8 align-self-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
               non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>

      </div>
  </div>




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
          <p>© Copyright 2018 Gourmet Food</p>
      </div>
  </div>
  </div>
    </footer>

      <script src="node_modules/jquery/dist/jquery.slim.min.js"></script>
      <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
      <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
      <script src="assets/js/scripts.js"></script>

      </div>
    );
  }
}

export default Home;

import React, { Component } from 'react';
import Header from './HeaderComponent';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Headercart from '../component/headcart';
import { connect } from 'react-redux';
import { addToCart } from '../component/actions/cartActions';

//import * as data from './data.json';
//import data from '../local-json/data.json';
//import Products from '../component/Products';


class Shop extends Component{

  handleClick = (id) => {
    this.props.addToCart(id);
  }

  render() {

        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} alt={item.title}/>
                            <span className="card-title">{item.title}</span>
                            <span to="/" onClick={()=>{this.handleClick(item.id)}} ><i className="bi bi-plus-circle-fill">ADD</i></span>
                        </div>

                        <div className="card-content">
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price}$</b></p>
                        </div>
                 </div>

            )
        })
    return (
<div className="container">
     <div className="row">
           <Breadcrumb>
             <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
             <BreadcrumbItem active> Order Online </BreadcrumbItem>
           </Breadcrumb>
          <div className="col-12">
               <div className="text3 row justify-content-center">
                   <h1> ORDER ONLINE </h1>
               </div>
                <hr/>
           </div>
           <div className="container">
          <Headercart />
          </div>

          <h3 className="center">our items</h3>
          <div className="box">
          {itemList}

          </div>
      </div>
</div>


)
  }
}
const mapStateToProps = (state)=>{
  return {
    items: state.items
  }
}
const mapDispatchToProps= (dispatch)=>{

    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Shop);

import React from 'react';
import { connect } from 'react-redux';
import { addQuantity, subsQuantity ,deleteProduct } from "./action/index";
import "./index.css";

class CartComponent extends React.Component {
    //store example 
    addQuantity = () => {
        this.props.addQuantity(this.props.product_details.quantity);
      };
    
      subsQuantity = () => {
        if (this.props.product_details.quantity < 1) {
          return this.props.subsQuantity(1);
        } else {
          return this.props.subsQuantity(this.props.product_details.quantity);
        }
      };
      deleteProduct =() => {
          this.props.deleteProduct(this.props.product_details)
      }
    
    render() {
          return (
        <ul className="navbar-nav">
              <li className="nav-item dropdown drop-cart d-none d-lg-block">
                        <a href="/cartDetail" className="nav-link dropdown-toggle" id="cart">
                            <i className="fa fa-shopping-cart"></i>
                            <span>{this.props.product_details.quantity}</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="cart">
                            <div className="row">
                                <div className="col-12">
                                    <div className="d-flex align-items-center m-3 btn-goto">
                                        <a href="/emptycart" className="btn btn-pink withoutRadiusBorder w-100">GO TO CART</a>
                                        <a href="#" className="btn btn-success withoutRadiusBorder w-100 d-none">CHECKOUT</a>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <h6 className="minicart-header">Your Shopping Basket [ <span>{this.props.product_details.quantity}</span> ]</h6>
                                </div>
                                <div className="col-12">
                                    <div className="scroll-height ">
                                    <div class="card" stl-id="4241349">
                                            <div class="row no-gutters">
                                                <div class="cardimg">
                                                    <img src={this.props.product_details.logo} class="card-img" />
                                                </div>
                                                <div class="card-body flex-column">
                                                    <h5 class="card-title w-100"> {this.props.product_details.name}</h5>
                                                    <div class="quantityGroup">
                                                        <h6 class="gothamMedium mb-0">Qty :</h6>
                                                        <button type="button" className="round-btn sub" title="If u want less quantity" onClick={this.subsQuantity}>-</button>
                                                       <label className="quantityTxt quantity " >{this.props.product_details.quantity}</label>
                                                      <button type="button" className="round-btn add" title="If u want more quantity" onClick={this.addQuantity} >+</button>
                                                </div>
                                                <i class="fa fa-trash text-danger border-0 p-0 outline-none"  onClick={this.deleteProduct}  > </i>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
        </ul>
      );
}
}

const mapStateToProps = state => ({

    product_details: state.sendProductToCart

});

const mapDispatchToprop ={addQuantity,subsQuantity, deleteProduct }
export default connect(mapStateToProps,mapDispatchToprop)(CartComponent);

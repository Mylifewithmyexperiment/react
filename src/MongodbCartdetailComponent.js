import React from 'react';
import { connect } from "react-redux";
import { addQuantity, subsQuantity } from "./action/index";

class MongodbCartdetailComponent extends React.Component {

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

    render() {
        return (
        
           
            <ul className="navbar-nav">
            <li className="nav-item dropdown drop-cart d-none d-lg-block">
                <a href="javascript:void(0);" className="nav-link dropdown-toggle" id="cart">
                    <i className="fa fa-shopping-cart"></i>
                    <span> {this.props.product_details.quantity}</span>
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="cart">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex align-items-center m-3 btn-goto">
                                <a href="/mongocartdetail" className="btn btn-pink withoutRadiusBorder w-100">GO TO CART</a>
                                <a href="javascript:void(0);" className="btn btn-success btn-checkout withoutRadiusBorder w-100">CHECKOUT</a>
                            </div>
                        </div>
                        <div className="col-12">
                            <h6 className="minicart-header">Your Shopping Basket [ <span> {this.props.product_details.quantity}  </span> ]</h6>
                        </div>
                        <div className="col-12">
                            <div className="scroll-height">
                                <div className="card" stl-id="4241349">
                                    <div className="row no-gutters">
                                        <div className="cardimg">
                                            <img src={ this.props.product_details.logo} className="card-img" />
                                        </div>
                                        <div className="card-body flex-column">
                                           <h5 className="card-title w-100">{this.props.product_details.name }</h5>
                                            <div className="quantityGroup">
                                                <h6 className="gothamMedium mb-0">Qty :</h6>
                                                <button type="button" className="round-btn sub" title="If u want less quantity" onClick={this.subsQuantity}>-</button>
                                                <label className="quantityTxt quantity " >{this.props.product_details.quantity}</label>
                                                <button type="button" className="round-btn add" title="If u want more quantity" onClick={this.addQuantity} >+</button>
                                     </div>
                                            <i className="fa fa-trash text-danger">2222</i>
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

const mapStateToProp =(state) =>({
   product_details :state.sendProductToCart
})

const mapDispatchToprop = { addQuantity, subsQuantity };

export default connect(mapStateToProp,mapDispatchToprop ) (MongodbCartdetailComponent)
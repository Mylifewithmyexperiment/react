import React from 'react'
import LogoComponent from './LogoComponent'
import CartComponent from './CartComponent'
import SearchComponent from './SearchComponent'
import MyAccountComponent from './MyAccountComponent';
import MenuComponent from './MenuComponent';
import FooterComponent from './FootComponent';
import StickyiconComponent from './StickyiconComponent';


class QuoteComponent extends React.Component {

    constructor(props)
    {
          super(props);
    }


    render(){
        return(
            
            <div>
                <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-pink" id="mainheader">
                     <div className="container">
                         <LogoComponent imagePath="/images/logo.png"/>
     
                         <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
                             <span className="navbar-toggler-icon" />
                         </button>
                         
                         <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                             <SearchComponent searchText="What are you looking for"/>
                             <MyAccountComponent/>
                             <CartComponent/>
                         </div>
                     </div>
                 </nav>
                 <MenuComponent/>
                 <StickyiconComponent/>

                 <section className="cart_section">
                 <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="text-white gothamMedium basket mb-4 d-none">Your Shopping Basket <span className="gothamLight">[ <span id="totalCart">3</span> ]</span></h3>

                        <div className="btnGroup">
                            <div className="editQuoteBtn mr-auto d-none">
                                <a href="javascript:void(0);" className="btn btn-white ml-0"><i className="fa fa-chevron-right mr-2"></i>Continue Shopping</a>
                                <a href="javascript:void(0);" className="btn btn-pink withoutRadiusBorder mr-auto">Add Items</a>
                            </div>
                            <a href="javascript:void(0);" className="btn btn-pink withoutRadiusBorder ml-auto editQuote">Edit Quote</a>
                            <div className="cartGroupBtn d-none">
                                <a href="javascript:void(0);" className="btn btn-pink withoutRadiusBorder">Save as Quote</a>
                                <a className="btn btn-white withoutRadiusBorder requestaQuote" data-toggle="collapse" href="#request_Quote" role="button" aria-expanded="false" aria-controls="request_Quote">Request a Quote</a>
                                <a href="javascript:void(0);" className="btn btn-success withoutRadiusBorder">Checkout</a>
                            </div>
                            <div className="requestQuoteBtn">
                                <a href="./empty_cart.html" className="btn btn-white withoutRadiusBorder mr-0">Cancel Quote</a>
                                <a href="javascript:void(0);" data-toggle="modal" data-target="#confirmQuoteModal" className="btn btn-success withoutRadiusBorder mr-0">Submit Quote</a>
                                
                                <div className="modal fade" id="confirmQuoteModal" tabIndex="-1" role="dialog" aria-labelledby="confirmQuoteModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h4 className="modal-title" id="exampleModalLabel">Confirm Requested Quote 00001001?</h4>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true"><img src="./images/blckclose.png" alt="close"/></span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="form-group">
                                                    <label className="gothamMedium">Name:</label>
                                                    <span className="gothamLight">Quote 00001001</span>
                                                </div>
                                                <div className="form-group">
                                                    <label className="gothamMedium">Description: </label>
                                                    <span className="gothamLight">N/A</span>
                                                </div>
                                                <div className="form-group mb-0">
                                                    <p className="mb-3 gothamMedium">Once a request for quote is submitted it cannot be modified.</p>
                                                    <p className="mb-0 gothamMedium">Are you sure you want to submit this quote?</p>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <a href="./empty_cart.html" className="btn btn-pink">YES</a>
                                                <a href="javascript:void(0);" data-dismiss="modal" aria-label="Close" className="btn btn-secondary">NO</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>

                        <div className="collapse show" id="request_Quote">
                            <div className="viewDiv">
                                <form className="row">
                                    <div className="col-md-4">
                                        <div className="form-group text-uppercase col mb-0">This Cart is being Quoted</div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group col mb-0"><label className="gothamMedium mb-0">STATUS: <span className="gothamLight">Draft</span></label></div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group col mb-0"><label className="gothamMedium mb-0">QUOTE ID: <span className="gothamLight">00001001</span></label></div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group col mb-0"><label className="gothamMedium mb-0">VERSION: <span className="gothamLight">1</span></label></div>
                                    </div>
                                    <div className="col-md-12">
                                        <hr/>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group col">
                                            <label className="gothamMedium">Preferred invoice address :</label>
                                        </div>
                                        <div className="form-group col">
                                            <label className="gothamMedium">Comapny Name:</label>
                                            <span className="gothamLight">Sterlite Technologies</span>
                                        </div>
                                        <div className="form-group col">
                                            <label className="gothamMedium">Contact:</label>
                                            <span className="gothamLight">0791122110</span>
                                        </div>
                                        <div className="form-group col">
                                            <label className="gothamMedium">Use PO box address:</label>
                                            <span className="gothamLight">No</span>
                                        </div>
                                        <div className="form-group col">
                                            <label className="gothamMedium">Street Address:</label>
                                            <span className="gothamLight">N/A</span>
                                        </div>
                                        <div className="form-group col">
                                            <label className="gothamMedium">Postcode:</label>
                                            <span className="gothamLight">360001</span>
                                        </div>
                                        <div className="form-group col">
                                            <label className="gothamMedium">City:</label>
                                            <span className="gothamLight">Ahmedabad</span>
                                        </div>

                                        <div className="form-group col">
                                            <label className="gothamMedium">Country:</label>
                                            <span className="gothamLight">India</span>
                                        </div>
                                        <div className="form-group col">
                                            <label className="gothamMedium">Phone (Optional):</label>
                                            <span className="gothamLight">0791155441</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group col description">
                                            <label className="gothamMedium">Description (Optional):</label>
                                            <span className="gothamLight">N/A</span>
                                        </div>
                                        <div className="form-group col">
                                            <label className="gothamMedium">Your reference (Optional):</label>
                                            <span className="gothamLight">N/A</span>
                                        </div>
                                        <div className="form-group col">
                                            <label className="gothamMedium">Previous Estimated Total:<b className="currency ml-2"></b><span className="gothamLight ml-1">0.00</span></label>
                                        </div>
                                        <div className="form-group col">
                                            <label className="gothamMedium">Date Placed:<span className="gothamLight ml-1">May 28, 2020 12:20 AM</span></label>
                                        </div>
                                        <div className="form-group col">
                                            <label className="gothamMedium">Date Updated:<span className="gothamLight ml-1">July 22, 2020 6:56 PM</span></label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="editDiv d-none">
                                <form className="row">
                                    <div className="col-md-4">
                                        <div className="form-group text-uppercase col mb-0">This Cart is being Quoted</div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group col mb-0"><label className="gothamMedium mb-0">STATUS: <span className="gothamLight">Draft</span></label></div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group col mb-0"><label className="gothamMedium mb-0">QUOTE ID: <span className="gothamLight">00001001</span></label></div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group col mb-0"><label className="gothamMedium mb-0">VERSION: <span className="gothamLight">1</span></label></div>
                                    </div>
                                    <div className="col-md-12">
                                        <hr/>
                                        <h4 className="gothamMedium pl-3">Please review and confirm your request for a quote</h4>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group col">
                                            <label className="gothamLight">Preferred invoice address</label>
                                            <input className="form-control" placeholder="Company (line 1)" defaultValue="Sterlite Technologies" />
                                        </div>
                                        <div className="form-group col">
                                            <input type="number" className="form-control" placeholder="Contact" defaultValue="0791122110" />
                                        </div>
                                        <div className="form-group col">
                                            <label className="gothamLight">Use PO box address:</label>
                                            <div className="dropdown usepobox">
                                                <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    No
                                                </button>
                                                <div className="dropdown-menu" aria-labelledby="dropQty">
                                                    <a className="dropdown-item active" href="javascript:void(0);">No</a>
                                                    <a className="dropdown-item" href="javascript:void(0);">Yes</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group col">
                                            <textarea className="form-control" placeholder="Street Address"></textarea>
                                        </div>
                                        <div className="form-group col">
                                            <input type="number" className="form-control" placeholder="Postcode" defaultValue="360001" />
                                        </div>
                                        <div className="form-group col">
                                            <input type="text" className="form-control" placeholder="City" defaultValue="Ahmedabad" />
                                        </div>

                                        <div className="form-group col">
                                            <label className="gothamLight">Country:</label>
                                            <div className="dropdown usepobox">
                                                <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    India
                                                </button>
                                                <div className="dropdown-menu" aria-labelledby="dropQty">
                                                    <a className="dropdown-item" href="javascript:void(0);">Austria</a>
                                                    <a className="dropdown-item" href="javascript:void(0);">Belgium</a>
                                                    <a className="dropdown-item" href="javascript:void(0);">Denmark</a>
                                                    <a className="dropdown-item" href="javascript:void(0);">France</a>
                                                    <a className="dropdown-item" href="javascript:void(0);">Greece</a>
                                                    <a className="dropdown-item active" href="javascript:void(0);">India</a>
                                                    <a className="dropdown-item" href="javascript:void(0);">Italy</a>
                                                    <a className="dropdown-item" href="javascript:void(0);">Spain</a>
                                                    <a className="dropdown-item" href="javascript:void(0);">Sweden</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group col">
                                            <input type="number" className="form-control" placeholder="Phone (Optional)" defaultValue="0791155441" />
                                        </div>
                                        <div className="form-group col">
                                            <label className="lbl_privacy">Please read our <a href="javascript:void(0);" className="text-pink">Privacy Policy</a> for information on how we process your data and protect your rights as a data subject.</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group col">
                                            <label className="gothamLight">Description (Optional):</label>
                                            <textarea className="form-control description edit" placeholder="Description (Optional)"></textarea>
                                        </div>
                                        <div className="form-group col">
                                            <textarea className="form-control" placeholder="Your reference (Optional)"></textarea>
                                        </div>
                                        <div className="form-group col">
                                            <label className="gothamMedium">Previous Estimated Total:<b className="currency ml-2"></b><span className="gothamLight ml-1">0.00</span></label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <table id="viewCartTbl" className="table mt-4">
                            <thead>
                                <tr>
                                    <th scope="col">Products</th>
                                    <th scope="col" className="text-center">Quantity</th>
                                    <th scope="col" className="text-right">Recurring <br/>Charges</th>
                                    <th scope="col" className="text-right">One Time <br/>Charges</th>
                                    <th scope="col" className="text-center">Delivery</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr stl-id="04241349">
                                    <td className="products pl-0">
                                        <div className="card">
                                            <div className="row no-gutters">
                                                <div className="cardimg">
                                                    <img src="./images/office-365-enterprise-e1.png" className="card-img" alt="Office 365 Enterprise E1"/>
                                                    <span className="img-gradient">
                                                        <h5> <span>E1</span></h5>
                                                    </span>
                                                </div>
                                                <div className="card-body flex-column">
                                                    <div className="d-flex justify-content-between w-100 mb-2">
                                                        <h5 className="card-title w-100">Office 365 Enterprise E1</h5>
                                                    </div>
                                                    <ul className="mb-0">
                                                        <li>
                                                            <b className="mr-1">Sterlite no.:</b>4241349
                                                        </li>
                                                        <li className="pb-2">
                                                            <b className="mr-1">Manufacturer no.:</b>65222610AE01A24
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="text-center">
                                        <div className="quantityGroup">
                                            <label className="gothamMedium text-dark">1</label>
                                        </div>
                                    </td>
                                    <td className="gothamMedium text-right"></td>
                                    <td className="onetime charges">
                                        <ul>
                                            <li className="price">
                                                <strong className="title"></strong>
                                                <b className="currency"></b>
                                                <span>6.55</span>
                                                <p className="singleprice d-none">6.55</p>
                                            </li>
                                        </ul>
                                    </td>
                                    <td className="text-center valign_middle text-dark">
                                        SHIP
                                    </td>
                                </tr>
                                <tr stl-id="0100772575">
                                    <td className="products pl-0">
                                        <div className="card">
                                            <div className="row no-gutters">
                                                <div className="cardimg">
                                                    <img src="./images/brand-ADO.gif" className="card-img" alt="Adobe"/>
                                                    <span className="img-gradient">
                                                        <h5> <span>Adobe</span></h5>
                                                    </span>
                                                </div>
                                                <div className="card-body flex-column">
                                                    <div className="d-flex justify-content-between w-100 mb-2">
                                                        <h5 className="card-title w-100">Adobe Coldfusion Standard 2016 All Platforms</h5>
                                                    </div>
                                                    <ul className="mb-0">
                                                        <li>
                                                            <b className="mr-1">Sterlite no.:</b>100772575
                                                        </li>
                                                        <li className="pb-2">
                                                            <b className="mr-1">Manufacturer no.:</b>65268346AD01A00
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="text-center">
                                        <div className="quantityGroup">
                                            <label className="gothamMedium text-dark">1</label>
                                        </div>
                                    </td>
                                    <td className="gothamMedium text-right"></td>
                                    <td className="onetime charges">
                                        <ul>
                                            <li className="price">
                                                <strong className="title"></strong>
                                                <b className="currency"></b>
                                                <span>1498.00</span>
                                                <p className="singleprice d-none">1498.00</p>
                                            </li>
                                        </ul>
                                    </td>
                                    <td className="text-center valign_middle text-dark">
                                        SHIP
                                    </td>
                                </tr>
                                <tr stl-id="04465825">
                                    <td className="products pl-0">
                                        <div className="card">
                                            <div className="row no-gutters">
                                                <div className="cardimg">
                                                    <img src="./images/laptop.jpeg" className="card-img" alt="Dell"/>
                                                    <span className="img-gradient">
                                                        <h5> <span>Dell</span></h5>
                                                    </span>
                                                </div>
                                                <div className="card-body flex-column">
                                                    <div className="d-flex justify-content-between w-100 mb-2">
                                                        <h5 className="card-title w-100">Dell Precision 3551 i7 32/512GB Mob. WS</h5>
                                                    </div>
                                                    <ul className="mb-0">
                                                        <li>
                                                            <b className="mr-1">Sterlite no.:</b>4465825
                                                        </li>
                                                        <li className="pb-2">
                                                            <b className="mr-1">Manufacturer no.:</b>KKXP3
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="text-center">
                                        <div className="quantityGroup">
                                            <label className="gothamMedium text-dark">1</label>
                                        </div>
                                    </td>
                                    <td className="recurring charges">
                                        <ul>
                                            <li className="price">
                                                <strong className="title"></strong>
                                                <b className="currency"></b>
                                                <span>1759.00</span>
                                                <p className="singleprice d-none">1759.00</p>
                                            </li>
                                        </ul>
                                    </td>
                                    <td className="gothamMedium text-right"></td>
                                    <td className="text-center valign_middle text-dark">
                                        SHIP
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="5" className="p-0"></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="text-pink text-center">
                                        <h4 className="gothamMedium mb-0">Total :</h4>
                                    </td>
                                    <td className="text-right text-black gothamMedium" id="totalRecurring"><b className="currency"></b> <span className="gothamMedium">1759.00</span></td>
                                    <td className="text-right text-black" id="totalOnetime"><b className="currency"></b> <span className="gothamMedium">1504.55</span></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td colSpan="5" className="p-0"></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td colSpan="3" className="border-0">
                                        <table className="checkoutTotal">
                                        <tbody>
                                            <tr>
                                                <td colSpan="3" className="border-0">
                                                    <h3 className="paycheckout text-left">Order Summary</h3>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-pink">
                                                    <h4 className="gothamMedium mb-0">Pay on Checkout :</h4>
                                                </td>
                                                <td></td>
                                                <td id="subtotal_cart" className="text-right pr-0"><b className="currency"></b> <span className="gothamMedium">1504.55</span></td>
                                            </tr>
                                            <tr>
                                                <td>Flat transaction fee incl. shipping costs :</td>
                                                <td></td>
                                                <td className="text-right pr-0">FREE</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                        <table id="editCartTbl" className="table d-none mt-4">
                            <thead>
                                <tr>
                                    <th scope="col">Products</th>
                                    <th scope="col" className="text-center">Quantity</th>
                                    <th scope="col" className="text-right">Recurring <br/>Charges</th>
                                    <th scope="col" className="text-right">One Time <br/>Charges</th>
                                    <th scope="col" className="text-right"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr stl-id="4241349">
                                    <td className="products pl-0">
                                        <div className="card">
                                            <div className="row no-gutters">
                                                <div className="cardimg">
                                                    <img src="./images/office-365-enterprise-e1.png" className="card-img" alt="Office 365 Enterprise E1"/>
                                                    <span className="img-gradient">
                                                        <h5> <span>E1</span></h5>
                                                    </span>
                                                </div>
                                                <div className="card-body flex-column">
                                                    <div className="d-flex justify-content-between w-100 mb-2">
                                                        <h5 className="card-title w-100">Office 365 Enterprise E1</h5>
                                                        <i className="fa fa-chevron-down more"></i>
                                                    </div>
                                                    <ul>
                                                        <li>
                                                            <b className="mr-1">Sterlite no.:</b>4241349
                                                        </li>
                                                        <li className="pb-2">
                                                            <b className="mr-1">Manufacturer no.:</b>65222610AE01A24
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-truck text-pink"></i> <b>In stock</b>
                                                        </li>
                                                    </ul>

                                                    <div className="note">
                                                        <textarea type="text" className="form-control" placeholder="Note"></textarea>
                                                    </div>
                                                    <div className="remaining d-none">
                                                        <ul>
                                                            <li><b>Segment:</b> Education</li>
                                                            <li><b>Duration:</b> 12 month(s)</li>
                                                            <li><b>Product language:</b> English United States</li>
                                                            <li><b>Operating system:</b> Undefined</li>
                                                            <li><b>Type:</b> Upgrade</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="text-center">
                                        <div className="quantityGroup">

                                            <button type="button" className="round-btn sub" title="If u want less quantity">-</button>
                                            <input className="quantityTxt quantity ct" name="quantity[]" type="text" defaultValue="1" maxLength="4"/>
                                            <button type="button" className="round-btn add" title="If u want more quantity">+</button>
                                        </div>
                                    </td>
                                    <td className="gothamMedium text-right"></td>
                                    <td className="onetime charges">
                                        <ul>
                                            <li className="price">
                                                <strong className="title"></strong>
                                                <b className="currency"></b>
                                                <span>6.55</span>
                                                <p className="singleprice d-none">6.55</p>
                                            </li>
                                            <li className="mrp text-danger">
                                                <strong className="title"></strong>
                                                <b className="currency"></b>
                                                <span>10.00</span>
                                                <p className="singleprice d-none">10.00</p>
                                            </li>
                                            <li className="yousave text-success">
                                                <strong className="title">You Save : </strong>
                                                <b className="currency"></b>
                                                <b><span>4.45</span> (44.5%)</b>
                                                <p className="singleprice d-none">4.45</p>
                                            </li>
                                        </ul>
                                    </td>
                                    <td className="text-right valign_middle">
                                        <div className="iconGroup d-flex flex-column">
                                            <i className="fa fa-trash text-danger">12132</i>
                                        </div>
                                    </td>
                                </tr>
                                <tr stl-id="100772575">
                                    <td className="products pl-0">
                                        <div className="card">
                                            <div className="row no-gutters">
                                                <div className="cardimg">
                                                    <img src="./images/brand-ADO.gif" className="card-img" alt="Adobe"/>
                                                    <span className="img-gradient">
                                                        <h5> <span>Adobe</span></h5>
                                                    </span>
                                                </div>
                                                <div className="card-body flex-column">
                                                    <div className="d-flex justify-content-between w-100 mb-2">
                                                        <h5 className="card-title w-100">Adobe Coldfusion Standard 2016 All Platforms</h5>
                                                        <i className="fa fa-chevron-down more"></i>
                                                    </div>
                                                    <ul>
                                                        <li>
                                                            <b className="mr-1">Sterlite no.:</b>100772575
                                                        </li>
                                                        <li className="pb-2">
                                                            <b className="mr-1">Manufacturer no.:</b>65268346AD01A00
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-truck text-pink"></i> <b>In stock</b>
                                                        </li>
                                                    </ul>

                                                    <div className="note">
                                                        <textarea type="text" className="form-control" placeholder="Note"></textarea>
                                                    </div>
                                                    <div className="remaining d-none">
                                                        <ul>
                                                            <li><b>Segment:</b> Education</li>
                                                            <li><b>Product language:</b> English United States</li>
                                                            <li><b>Level:</b> Adobe TLP 5.0 Commercial</li>
                                                            <li><b>Licensing model:</b> Adobe TLP 5.0</li>
                                                            <li><b>Operating system:</b> Undefined</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="text-center">
                                        <div className="quantityGroup">
                                            <button type="button" className="round-btn sub" title="If u want less quantity">-</button>
                                            <input className="quantityTxt quantity ct" name="quantity[]" type="text" defaultValue="144" maxLength="4"/>2323
                                            <button type="button" className="round-btn add" title="If u want more quantity">+</button>
                                        </div>
                                    </td>
                                    <td className="gothamMedium text-right"></td>
                                    <td className="onetime charges">
                                        <ul>
                                            <li className="price">
                                                <strong className="title"></strong>
                                                <b className="currency"></b>
                                                <span>1498.00</span>
                                                <p className="singleprice d-none">1498.00</p>
                                            </li>
                                            <li className="mrp text-danger">
                                                <strong className="title"></strong>
                                                <b className="currency"></b>
                                                <span>1550.00</span>
                                                <p className="singleprice d-none">1550.00</p>
                                            </li>
                                            <li className="yousave text-success">
                                                <strong className="title">You Save : </strong>
                                                <b className="currency"></b>
                                                <b><span>52.00</span> (3.35%)</b>
                                                <p className="singleprice d-none">52.00</p>
                                            </li>
                                        </ul>
                                    </td>
                                    <td className="text-right valign_middle">
                                        <div className="iconGroup d-flex flex-column">
                                            <i className="fa fa-trash text-danger">323</i>
                                        </div>
                                    </td>
                                </tr>
                                <tr stl-id="4465825">
                                    <td className="products pl-0">
                                        <div className="card">
                                            <div className="row no-gutters">
                                                <div className="cardimg">
                                                    <img src="./images/laptop.jpeg" className="card-img" alt="Adobe"/>
                                                    <span className="img-gradient">
                                                        <h5> <span>Dell</span></h5>
                                                    </span>
                                                </div>
                                                <div className="card-body flex-column">
                                                    <div className="d-flex justify-content-between w-100 mb-2">
                                                        <h5 className="card-title w-100">Dell Precision 3551 i7 32/512GB Mob. WS</h5>
                                                        <i className="fa fa-chevron-down more"></i>
                                                    </div>
                                                    <ul>
                                                        <li>
                                                            <b className="mr-1">Sterlite no.:</b>4465825
                                                        </li>
                                                        <li className="pb-2">
                                                            <b className="mr-1">Manufacturer no.:</b>KKXP3
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-truck text-warning"></i> <b>Available in 20 days</b>
                                                        </li>
                                                    </ul>

                                                    <div className="note">
                                                        <textarea type="text" className="form-control" placeholder="Note"></textarea>
                                                    </div>
                                                    <div className="remaining d-none">
                                                        <ul>
                                                            <li><b>Display size:</b> 39.6 cm (15.6")</li>
                                                            <li><b>Physical resolution:</b> 1920 x 1080</li>
                                                            <li><b>Graphics:</b> 4 GB NVIDIA Quadro P620</li>
                                                            <li><b>Processor model:</b> Intel Core i7-10850H, 2.7 GHz</li>
                                                            <li><b>RAM:</b> 32 GB</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="text-center">
                                        <div className="quantityGroup">
                                            <button type="button" className="round-btn sub" title="If u want less quantity">-</button>
                                            <input className="quantityTxt quantity ct" name="quantity[]" type="text" defaultValue="1443" maxLength="4"/>
                                            <button type="button" className="round-btn add" title="If u want more quantity">+</button>
                                        </div>
                                    </td>
                                    <td className="recurring charges">
                                        <ul>
                                            <li className="price">
                                                <strong className="title"></strong>
                                                <b className="currency"></b>
                                                <span>1759.00</span>
                                                <p className="singleprice d-none">1759.00</p>
                                            </li>
                                            <li className="mrp text-danger">
                                                <strong className="title"></strong>
                                                <b className="currency"></b>
                                                <span>1850.00</span>
                                                <p className="singleprice d-none">1850.00</p>
                                            </li>
                                            <li className="yousave text-success">
                                                <strong className="title">You Save : </strong>
                                                <b className="currency"></b>
                                                <b><span>91.00</span> (4.92%)</b>
                                                <p className="singleprice d-none">91.00</p>
                                            </li>
                                        </ul>
                                    </td>
                                    <td className="gothamMedium text-right"></td>
                                    <td className="text-right valign_middle">
                                        <div className="iconGroup d-flex flex-column">
                                            <i className="fa fa-trash text-danger">3332</i>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="5" className="p-0"></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="text-pink text-center">
                                        <h4 className="gothamMedium mb-0">Total :</h4>
                                    </td>
                                    <td className="text-right text-black gothamMedium" id="totalRecurring"><b className="currency"></b> <span className="gothamMedium">1759.00</span></td>
                                    <td className="text-right text-black" id="totalOnetime"><b className="currency"></b> <span className="gothamMedium">1504.55</span></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td colSpan="5" className="p-0"></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td colSpan="3" className="border-0">
                                        <table className="checkoutTotal">
                                        <tbody>
                                            <tr>
                                                <td colSpan="3" className="border-0">
                                                    <h3 className="paycheckout text-left">Order Summary</h3>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-pink">
                                                    <h4 className="gothamMedium mb-0">Pay on Checkout :</h4>
                                                </td>
                                                <td></td>
                                                <td id="subtotal_cart" className="text-right pr-0"><b className="currency"></b> <span className="gothamMedium">1504.55</span></td>
                                            </tr>
                                            <tr>
                                                <td>Flat transaction fee incl. shipping costs :</td>
                                                <td></td>
                                                <td className="text-right pr-0">FREE</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td colSpan="4" align="right">
                                        <a href="javascript:void(0);" className="btn btn-success mb-3 mt-2">Checkout</a>
                                    </td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
        <FooterComponent/>
                 </div>



        );
    }
}

export default QuoteComponent;
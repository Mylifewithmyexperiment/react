import {
  SEND_PRODUCT_TO_CART,
  ADD_QUANTITY,
  SUBS_QUANTITY,DELETE_QUANTITY
} from "../actionTypes";

const initialstate= {
  name:"",
  quantity: "0",
  logo :"",
  details :"",
  author:""
}
 
export const sendProductToCartAction = (params) => ({
  type: SEND_PRODUCT_TO_CART,
  params,
});

export const addQuantity = (params) => ({
  type: ADD_QUANTITY,
  params: Number(++params),
});

export const subsQuantity = (params) => ({
  type: SUBS_QUANTITY,
  params: Number(--params),
  
});

export const deleteProduct = (params)=>( {
type: DELETE_QUANTITY,
  details:null,
  name :"",
  author:"",
  quantity:"0",
  logo:"",
params:initialstate
});
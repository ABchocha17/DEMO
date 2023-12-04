import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Container from '../components/Container';


export default function Cart() {
  return (
    <>
    <Meta title="Cart" />
    <BreadCrumb title="Cart" />
    <Container className="cart_wrapper home_wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart_heade d-flex align-items-center justify-content-between">
                <h4 className='cart_col_1'>Product</h4>
                <h4 className='cart_col_2 text-center'>Price</h4>
                <h4 className='cart_col_3 text-center'>Quantity</h4>
                <h4 className='cart_col_4 text-end'>Total</h4>
            </div>
            <div className="cart_heade d-flex align-items-center justify-content-between">
                <div className='cart_col_1 d-flex align-items-center gap-10'>
                    <div className="w-25">
                        <img src="/images/watch.jpg" alt="" className='img-fluid' />
                    </div>
                    <div className="w-75">
                        <h5 className='product_title'>Lorem ipsum dolor sit amet consectetur.</h5>
                        <p className="color mb-0">color: red</p>
                        <p className="size mb-0">size: xxl</p>
                    </div>
                </div>
                <div className='cart_col_2 text-center'>
                   <h5 className='price'>$ 100</h5>
                </div>
                <div className='cart_col_3 d-flex align-items-center justify-content-center gap-10'>
                    <div className="product_add">
                        <input type="number" className='form-control' />
                    </div>
                    <div className="product_delet">
                       <RiDeleteBin6Line />
                    </div>
                </div>
                <div className='cart_col_4 text-end'>
                   <h5 className='price totla'>$ 100</h5>
                </div>
            </div>
          </div>
          <div className="col-12 py-2">
            <div className="d-flex justify-content-between align-items-start">
              <Link to="/store" class="singlebtn btn">Continue To Shopping</Link>
              <div className="text-end">
                <h4>SubTotal: $ 100</h4>
                <p>Taxes and shipping calculated at checkout</p>
                <Link to="/checkout" class="singlebtn btn">checkout</Link>
              </div>
            </div>
           
          </div>
        </div>
    </Container>
  </>
  )
}

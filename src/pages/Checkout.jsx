import React from 'react';
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import Container from '../components/Container';


export default function Checkout() {
  return (
    <>

    <Container class1="checkout_wrapper home_wrapper-2 py-5">
        <div className="row">
          <div className="col-7">
            <div className="checkout_form_data">
              <h3>AB Corner</h3>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><Link to="/cart">Cart</Link></li>
                  <li class="breadcrumb-item active">nformation</li> 
                  <li class="breadcrumb-item disabled"><Link to="#.">Shipping</Link></li>
                  <li class="breadcrumb-item disabled"><Link to="#.">Payments</Link></li>
                </ol>
                <h4 className='title'>Contact Information</h4>
                <p className="user_details">Navdeep Dahiya (demo@gamil.com)</p> 
                <form action="" className='contact_form normal_form'>
                    <h4 className='title'>Shipping address</h4>
                    <div className="d-flex normal_form_inr">
                        <div className="col-1 form-floating select_tag">
                            <select name="newaddress" id="newaddress" className='form-control'>
                              <option value="" select>Address</option>
                              <option value="" select>Address</option>
                              <option value="" select>Address</option>
                              <option value="" select>Address</option>
                            </select>
                            <label htmlFor="newaddress" className='mb-2'>Saved addresses</label>
                        </div>
                        <div className="col-1 form-floating select_tag">                          
                            <select name="country" id="country" className='form-control'>
                              <option value="">select country</option>
                              <option value="">select country</option>
                              <option value="">select country</option>
                            </select>
                            <label htmlFor="Country" className='mb-2'>Country / Region</label>
                        </div>
                        <div className="col-2 form-floating">
                            <input type="text" className='form-control' placeholder='Fist name' name='Name' id='Fist' />
                            <label htmlFor="Fist" className='mb-2'>Fist Name (optional)</label>
                        </div>
                        <div className="col-2 form-floating">
                            <input type="text" className='form-control' placeholder='Last Name' name='Last' id='Last' />
                            <label htmlFor="Last" className='mb-2'>Last Name</label>
                        </div>
                        <div className="col-1 form-floating">
                            <input type="text" className='form-control' placeholder='Address' name='Address' id='Address' />
                            <label htmlFor="Address" className='mb-2'>Addresses</label>
                        </div>
                        <div className="col-1 form-floating">
                            <input type="text" className='form-control' placeholder='Apartment, Suite, etc' name='Apartment' id='Apartment' />
                            <label htmlFor="Apartment" className='mb-2'>Fist Name (optional)</label>
                        </div>
                        <div className="col-3 form-floating">
                            <input type="text" className='form-control' placeholder='City' name='Name' id='City' />
                            <label htmlFor="City" className='mb-2'>Fist Name (optional)</label>
                        </div>
                        <div className="col-3 form-floating select_tag">                          
                            <select name="State" id="State" className='form-control'>
                              <option value="">select State</option>
                              <option value="">select State</option>
                              <option value="">select State</option>
                            </select>
                            <label htmlFor="State" className='mb-2'>Country / Region</label>
                        </div>
                        <div className="col-3 form-floating">
                            <input type="number" className='form-control' placeholder='Zipcode' name='Name' id='zipcode' />
                            <label htmlFor="zipcode" className='mb-2'>Fist Name (optional)</label>
                        </div>
                        <div className="col-1 check_submit d-flex align-items-center justify-content-between">
                            <Link to="/cart"><FaArrowLeft/> Return to cart</Link>
                            <button type="submit" class="btn">Submit</button>
                        </div>
                    </div>
                </form>            
              </nav>
            </div>
          </div>
          <div className="col-5">
            <div className="border_buttom py-4">
              <h4 className='title mb-5 mt-5'>Cart Information</h4>
              <div className="d-flex gap-15 align-items-center">
                <div className="w-25 position-relative">
                  <span className="position-absolute badge border item_num">1</span>
                  <img src="images/watch.jpg" alt="" className='img-fluid' />
                </div>
                <div className="w-75">
                  <h5 className="title">Lorem ipsum dolor sit.</h5>
                  <p className='mb-0'>s/#fnb5mn</p>
                </div>
                <div className="w-25 text-end">
                  <h5>$ 100</h5>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="border_buttom py-4  ">
              <div className="d-flex align-item-center justify-content-between">
                <p>SubTotal</p>
                <p>$ 100</p>
              </div>
              <div className="d-flex align-item-center justify-content-between">
                <p>Shiping</p>
                <p>$ 20</p>
              </div>
            </div>
            <div className="d-flex align-item-center justify-content-between">
              <h4>Total</h4>
              <h5>$ 120</h5>
            </div>
          </div>
        </div>
    </Container>
  </>
  )
}

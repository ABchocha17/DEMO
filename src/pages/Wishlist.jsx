import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from '../components/Container';


export default function Wishlist() {
  return (
    <>
    <Meta title="Wishlist" />
    <BreadCrumb title="Wishlist" />
    <Container class1="wishlist_wrapper home_wrapper-2 py-5">
      <div className="row">
        <div className="col-3">
          <div className="wishlist_card position-relative">
            <img src="images/cross.svg" className='position-absolute cross' alt="cross" />
            <div className="wishlist_card_img">
              <img src="images/watch.jpg" alt="watch" className='img-fluid w-100' />
            </div>
            <div className="compare_product_details">
              <h5 className='title'>Lorem ipsum dolor, sit amet consecte adipisicing elit. Molestiae?</h5>
              <h6 className='price'>$100</h6>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="wishlist_card position-relative">
            <img src="images/cross.svg" className='position-absolute cross' alt="cross" />
            <div className="wishlist_card_img">
              <img src="images/watch.jpg" alt="watch" className='img-fluid w-100' />
            </div>
            <div className="compare_product_details">
              <h5 className='title'>Lorem ipsum dolor, sit amet consecte adipisicing elit. Molestiae?</h5>
              <h6 className='price'>$100</h6>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="wishlist_card position-relative">
            <img src="images/cross.svg" className='position-absolute cross' alt="cross" />
            <div className="wishlist_card_img">
              <img src="images/watch.jpg" alt="watch" className='img-fluid w-100' />
            </div>
            <div className="compare_product_details">
              <h5 className='title'>Lorem ipsum dolor, sit amet consecte adipisicing elit. Molestiae?</h5>
              <h6 className='price'>$100</h6>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </>
  )
}

import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Colors from "../components/Colors";
import Container from '../components/Container';


export default function Compareproduct() {
  return (
    <>
    <Meta title="Compare Product" />
    <BreadCrumb title="Compare Product" />
    <Container class1="store_wrapper home_wrapper-2 py-5">
        <div className="row">
         <div className="col-3">
          <div className="compare_product_card position-relative">
            <img src="images/cross.svg" className='position-absolute cross' alt="cross" />
            <div className="compare_product_card_img">
              <img src="images/watch.jpg" alt="watch" />
            </div>
            <div className="compare_product_details">
              <h5 className='title'>Lorem ipsum dolor, sit amet consecte adipisicing elit. Molestiae?</h5>
              <h6 className='price'>$100</h6>
              <div className="">
                <div className="product_details">
                  <h5 className='mb-0'>Brand:</h5>
                  <p className='mb-0'>Havels</p>
                </div>
                <div className="product_details">
                  <h5 className='mb-0'>Type:</h5>
                  <p className='mb-0'>watch</p>
                </div>
                {/* <div className="product_details">
                  <h5 className='mb-0'>SKU:</h5>
                  <p className='mb-0'>SkU035</p>
                </div> */}
                <div className="product_details">
                  <h5 className='mb-0'>Availability:</h5>
                  <p className='mb-0'>in Stock</p>
                </div>
                <div className="product_details">
                  <h5 className='mb-0'>Color:</h5>
                  <Colors />
                </div>
                <div className="product_details">
                  <h5 className='mb-0'>Size:</h5>
                  <div className="d-flex gap-10">
                  <p className='mb-0'>S</p>
                  <p className='mb-0'>M</p>
                  <p className='mb-0'>L</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
         </div>
         <div className="col-3">
          <div className="compare_product_card position-relative">
            <img src="images/cross.svg" className='position-absolute cross' alt="cross" />
            <div className="compare_product_card_img">
              <img src="images/watch.jpg" alt="watch" />
            </div>
            <div className="compare_product_details">
              <h5 className='title'>Lorem ipsum dolor, sit amet consecte adipisicing elit. Molestiae?</h5>
              <h6 className='price'>$100</h6>
              <div className="">
                <div className="product_details">
                  <h5 className='mb-0'>Brand:</h5>
                  <p className='mb-0'>Havels</p>
                </div>
                <div className="product_details">
                  <h5 className='mb-0'>Type:</h5>
                  <p className='mb-0'>watch</p>
                </div>
                {/* <div className="product_details">
                  <h5 className='mb-0'>SKU:</h5>
                  <p className='mb-0'>SkU035</p>
                </div> */}
                <div className="product_details">
                  <h5 className='mb-0'>Availability:</h5>
                  <p className='mb-0'>in Stock</p>
                </div>
                <div className="product_details">
                  <h5 className='mb-0'>Color:</h5>
                  <Colors />
                </div>
                <div className="product_details">
                  <h5 className='mb-0'>Size:</h5>
                  <div className="d-flex gap-10">
                  <p className='mb-0'>S</p>
                  <p className='mb-0'>M</p>
                  <p className='mb-0'>L</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
         </div>
        </div>
    </Container>
  </>
  )
}

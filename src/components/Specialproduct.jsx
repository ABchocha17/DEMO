import React from 'react';
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const ratingChanged = (newRating) => { console.log(newRating); };

export default function Specialproduct() {
  return (
    <>
        <div className="col-6 mb-4">
            <div className="spacialproductcard">
                <div className="d-flex align-items-center juctify-content-bettween">
                    <div className="spacialproductcard_img">
                        <img src="images/watch.jpg" alt="spacialproductcard_img" className='img-fluid'/>
                    </div>
                    <div className="spacialproductcard_content">
                        <h6 className="brand">Havels</h6>
                        <h5 className="product_title">Kids headphones</h5>
                        <ReactStars count={5} onChange={ratingChanged} size={24} value={4} edit={false} activeColor="#232f3e" />
                        <p className="product_price mb-0"><span className="red-p">$100.00</span>&nbsp;<strike>$200.00</strike></p>
                        <div className="discount_till d-flex align-items-center gap-10 flex-wrap">
                            <p className='mb-0'> <b>5 day</b> </p>
                            <div className="d-flex gap-10 align-items-center time_offers">
                                <span className="badge rounded-circle bg-danger">1</span>:
                                <span className="badge rounded-circle bg-danger">1</span>:
                                <span className="badge rounded-circle bg-danger">1</span>
                            </div>
                            <div className="product_counts w-100">
                                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar" style={{width: "50%"}}></div>
                                </div>
                            </div>
                        </div>
                        <Link to="/" className='butoon_link mt-3 '>Add to cart</Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

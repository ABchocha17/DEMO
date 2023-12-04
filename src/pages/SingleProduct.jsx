import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Productcard from "../components/Productcard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import Colors from '../components/Colors';
import Container from '../components/Container';

const ratingChanged = (newRating) => {
    console.log(newRating);
  };

export default function SingleProduct() {
    
    const [orderedProduct,setorderedProduct] = useState(true);
    console.log(setorderedProduct(true))
    const props = { width: 400, height: 500, img: "/images/watch.jpg" };
    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
      }
  return (
    <>
    <Meta title="Product Name" />
    <BreadCrumb title="Product Name" />
    <Container class1={`singelproduct_wrapper home_wrapper-2 py-3 `}>
      <div className="singelproduct_inr">
        <div className="row">
            <div className="col-6">
                <div className="singelproduct_img">
                    <div className="singelproduct_img_inr">
                        <ReactImageZoom {...props} />
                    </div>
                    <div className="others_products d-flex flex-wrap mt-3">
                        <div className="others_products_card">
                            <img src="/images/watch.jpg" alt="watch" className='img-fluid' />
                        </div>
                        <div className="others_products_card">
                            <img src="/images/watch.jpg" alt="watch" className='img-fluid' />
                        </div>
                        <div className="others_products_card">
                            <img src="/images/watch.jpg" alt="watch" className='img-fluid' />
                        </div>
                        <div className="others_products_card">
                            <img src="/images/watch.jpg" alt="watch" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="singelproduct_details">
                    <div className="border_buttom">
                        <h3 className='product_title'>Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="border_buttom mt-3">
                        <p className="price mb-0">$ 100</p>
                        <div className="d-flex align-items-center gap-10">
                            <ReactStars count={5} onChange={ratingChanged} size={24} value={4} edit={false} activeColor="#232f3e" />
                            <p className="mb-0">( 2 Review )</p>
                        </div>
                        <a href="#review" className='review_link'>Write A Review</a>
                    </div>
                    <div className="border_buttom mt-3">
                        <div className="d-flex align-items-center gap-10 mt-2 mb-2">
                            <h3 className='product_hadline'>Type :</h3>
                            <p className='mb-0 product_data'>headset</p>
                        </div>
                        <div className="d-flex align-items-center gap-10 mt-2 mb-2">
                            <h3 className='product_hadline'>Brand :</h3>
                            <p className='mb-0 product_data'>Havells</p>
                        </div>
                        <div className="d-flex align-items-center gap-10 mt-2 mb-2">
                            <h3 className='product_hadline'>Categories :</h3>
                            <p className='mb-0 product_data'></p>
                        </div>
                        <div className="d-flex align-items-center gap-10 mt-2 mb-2">
                            <h3 className='product_hadline'>Tags :</h3>
                            <p className='mb-0 product_data'>headset</p>
                        </div>
                        <div className="d-flex align-items-center gap-10 mt-2 mb-2">
                            <h3 className='product_hadline'>Availablity :</h3>
                            <p className='mb-0 product_data'>in stocks</p>
                        </div>
                        <div className="d-flex flex-column gap-10 mt-2 mb-3">
                            <h3 className='product_hadline'>Size :</h3>
                            <div className="d-flex gap-10 flex-wrap">
                                <span className="badge text-dark border-1 border-dark border">S</span>
                                <span className="badge text-dark border-1 border-dark border">M</span>
                                <span className="badge text-dark border-1 border-dark border">XL</span>
                                <span className="badge text-dark border-1 border-dark border">XXL</span>
                            </div>
                        </div>
                        <div className="d-flex flex-column gap-10 mt-1 mb-2">
                            <h3 className='product_hadline'>Colors :</h3>
                            <Colors />
                        </div>
                        <div className="d-flex align-items-center gap-10 mt-3 mb-2">
                            <h3 className='product_hadline'>Quantity :</h3>
                            <div className="">
                                <input type="number" name='' id='' min={1} max={30} style={{width: "70px"}} placeholder='1' className='form-control' />
                            </div>
                            <div className="d-flex align-itens-center gap-10">
                            <button type="submit" class="singlebtn btn">Add To Cart</button>
                            <button type="submit" class="singlebtn btn">Buy It Now</button>
                            </div>
                        </div>
                        <div className="d-flex alighn-itens-center gap-15 mt-3 mb-2">
                            <div className="d-flex align-items-center gap-10">
                                <img src="/images/compare1.svg" alt="Compare" className='img-fluid singleproduct_imgicon' />
                                <a href="#." className='singleproduct_imglink'>Add To Compare</a>
                            </div>
                            <div className="d-flex align-items-center gap-10">
                                <img src="/images/wish.svg" alt="Compare"  className='img-fluid singleproduct_imgicon'/>
                                <a href="#." className='singleproduct_imglink'>Add To Wishlist</a>
                            </div>
                        </div>
                        <div className="d-flex alighn-itens-center flex-column gap_5 mt-3 mb-2">
                        <h3 className='product_hadline'>Shipping & Returns</h3>
                        <p className="product_data">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum natus quod recusandae ea cupiditate quibusdam ipsa officia cumque suscipit! Itaque labore facere dicta in, ipsum eius assumenda vel minima ratione?</p>
                        </div>
                        <div className="d-flex align-items-center gap-15 mt-3 mb-2">
                        <h4 className='product_hadline'>Product Link:</h4>
                        <a href="#." className='mb-0 product_data' onClick={() => {copyToClipboard("copy");}}>Copy Poduct Link</a>
                        </div>
                        <div className="accordene">

                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </Container>
    <Container class1="description_wrapper py-3 home_wrapper-2">
        <div className="row">
            <div className="col-12">
                <h4 id='review'>Description </h4>
                <div className="description_inr">
                    <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et officiis, iusto nesciunt ex sint eveniet autem ab cumque quis totam dolorum asperiores perferendis enim a, excepturi dolore esse nobis repudiandae.</p>
                </div>
            </div>
        </div>
    </Container>
    <Container class1="reviews_wrapper py-3 home_wrapper-2">
            <div className="row">
                <div className="col-12">
                    <h4>Review</h4>
                   <div className="review_inr">
                    <div className="review_hade d-flex align-items-end justify-content-between">
                    <div className="">
                        <h4 className='mb-2'>Customer Reviews</h4>
                        <div className="d-flex gap-10 align-items-center">
                            <ReactStars count={5} onChange={ratingChanged} size={20} value={4} edit={false} activeColor="#232f3e" />
                            <p className='mb-0'>Based on 2 reviews</p>
                        </div>
                    </div>
                    {
                        orderedProduct && (
                        <div className="">
                            <Link className='text-dark text-decoration-underline' to="/">Write a Review</Link>
                        </div>)
                    }
                    </div>
                    <div className="review_form mt-3">
                        <h4>Write A Review</h4>
                        <form action="" className='contact_form normal_form'>
                            <div className="d-flex normal_form_inr">
                                <div className="col-2">
                                    <label htmlFor="Name" className='mb-2'>Name</label>
                                    <input type="text" className='form-control' placeholder='Name' name='Name' id='Name' />
                                </div>
                                <div className="col-2">
                                    <label htmlFor="Email" className='mb-2' >Email</label>
                                    <input type="email" className='form-control' placeholder='Email' id='Email' />
                                </div>
                                <div className="col-2">
                                    <label htmlFor="ReviewTitle" className='mb-2' >Review Title</label>
                                    <input type="Number" className='form-control' placeholder='Give You Review Title' id='ReviewTitle' />
                                </div>
                                <div className="col-2">
                                    <label className='mb-2' >Rating</label>
                                    <ReactStars count={5} onChange={ratingChanged} size={24} value={0} edit={true} activeColor="#232f3e" />
                                </div>
                                <div className="col-1">
                                    <label htmlFor="Comment" className='mb-2' >Body of Review</label>
                                    <textarea name='' id=''  type="text" className='form-control' placeholder='Write Your Comment' />
                                </div>
                                <div className="col-1">
                                    <button type="submit" class="btn">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="review">
                        <div className="d-flex gap-10 align-items-center">
                            <h6>Navdeep</h6>
                            <ReactStars count={5} onChange={ratingChanged} size={24} value={4} edit={false} activeColor="#232f3e" />
                        </div>
                        <p className='mt-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repellendus fugit blanditiis aliquam dignissimos fuga, tenetur, repudiandae distinctio officiis saepe sapiente ullam laboriosam, culpa assumenda. Temporibus eligendi aperiam soluta reiciendis.</p>
                    </div>
                   </div>
                </div>
            </div>
    </Container>
    <Container class1="featured_wrapper py-3 home_wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3 className="section_title">Our popular Product</h3>
            </div>
          </div>
          <div className="row">
            <Productcard />
            <Productcard />
            <Productcard />
            <Productcard />
          </div>
    </Container>
  </>
  )
}

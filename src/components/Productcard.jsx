import React from "react";
import { Link, useLocation } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const ratingChanged = (newRating) => {
    console.log(newRating);
  };
export default function Productcard(props) {
  const {grids} = props;
  console.log(grids)
  let location = useLocation();
  return (
    <>
      <div className={`product_card_main ${location.pathname === "/store" ? `col-${grids}` :"col-3"}`}>
        <Link to="/product/:id">
          <div className="product_card position-relative">
            <div className="wishlist_icon position-absolute">
                <button className="border-0 bg-transparent"><img src="/images/wish.svg" alt="wish" /></button>
            </div>
          <div className="product_card_img mb-3">
            <img src="/images/watch3.jfif" alt="blog" className="product_img img-fluid" />
            <img src="/images/watch4.jfif" alt="blog" className="product_img img_hover img-fluid" />
          </div>
          <div className="product_cotent">
            <h6 className="brand">Havels</h6>
            <h5 className="product_title">Kids headphones bulk 10 pack multi colored for students</h5>
            <ReactStars count={5} onChange={ratingChanged} size={24} value={4} edit={false} activeColor="#232f3e" />
            <p className={`description ${grids === 12 ? "d-block" : "d-none"}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam eveniet eius ab similique animi vero, eos magnam facilis impedit labore? Animi itaque quia, architecto enim eos repudiandae vero porro minima.</p>
            <p className="product_price mb-0">$100.00</p>
          </div>
          <div className="active_bar position-absolute">
            <div className="d-flex flex-column gap-10">
                <button  className="border-0 bg-transparent"><img src="/images/prodcompare.svg" alt="prodcompare" /></button>
                <button  className="border-0 bg-transparent"><img src="/images/view.svg" alt="view" /></button>
                <button  className="border-0 bg-transparent"><img src="/images/add-cart.svg" alt="add-cart" /></button>
            </div>
          </div>
          </div>
        </Link>
      </div>
    </>
  );
}

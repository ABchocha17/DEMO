import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import Productcard from "../components/Productcard";
import Colors from "../components/Colors";
import Container from '../components/Container';

export default function Ourstore() {
   
const [grids, setGrid] = useState(4);
const ratingChanged = (newRating) => {
    console.log(newRating);
};

  return (

    <>
      <Meta title="Our Store" />
      <BreadCrumb title="Our Sore" />
      <Container class1="store_wrapper home_wrapper-2 py-5">
          <div className="row">
            <div className="col-3">
              <div className="filter_card mb-3">
                <h3 className="filter_title">Shop by category</h3>
                <div className="">
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter_card mb-3">
                <h3 className="filter_title">Filter By</h3>
                <div className="">
                  <h5 className="sub_title mt-0">Availablity</h5>
                  <div className="mb-2">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value=""
                        id="in"
                      />
                      <label htmlFor="in" className="form-check-label">
                        In Stock (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value=""
                        id="out"
                      />
                      <label htmlFor="out" className="form-check-label">
                        Out of Stock (0)
                      </label>
                    </div>
                  </div>
                  <h5 className="sub_title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <form className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="from"
                        placeholder="From"
                      />
                      <label for="from">From</label>
                    </form>
                    <form className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="to"
                        placeholder="To"
                      />
                      <label for="to">To</label>
                    </form>
                  </div>
                  <h5 className="sub_title">Colors</h5>
                  <div className="">
                    <div className="d-flex flex-wrap">
                      <Colors />
                    </div>
                  </div>
                  <h5 className="sub_title">Size</h5>
                  <div className="">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value=""
                        id="s"
                      />
                      <label htmlFor="s" className="form-check-label">
                        S (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value=""
                        id="m"
                      />
                      <label htmlFor="m" className="form-check-label">
                        M (0)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter_card mb-3">
                <h3 className="filter_title">Product Tags</h3>
                <div className="">
                  <div className="product_tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Headphone
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Laptop
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Mobile
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Wire
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter_card mb-3">
                <h3 className="filter_title">Random Product</h3>
                <div className="">
                  <div className="random_product d-flex">
                    <div className="w-25">
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt="watch"
                      />
                    </div>
                    <div className="w-75">
                      <h5 className="product_title">
                        Kids headphones bulk 10 pack multi colored for students
                      </h5>
                      <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={18}
                        value={4}
                        edit={false}
                        activeColor="#232f3e"
                      />
                      <p className="product_price mb-0">$100.00</p>
                    </div>
                  </div>
                  <div className="random_product d-flex">
                    <div className="w-25">
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt="watch"
                      />
                    </div>
                    <div className="w-75">
                      <h5 className="product_title">
                        Kids headphones bulk 10 pack multi colored for students
                      </h5>
                      <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={18}
                        value={4}
                        edit={false}
                        activeColor="#232f3e"
                      />
                      <p className="product_price mb-0">$100.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter_short_grid">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d-block shortby">Short By:</p>
                    <select name="" id="" className="form-control form-select">
                      <option value="manual">Feature</option>
                      <option value="Best-seling" selected> Best-seling </option>
                      <option value="Alphabeticaly, A-Z"> Alphabeticaly, A-Z </option>
                      <option value="Alphabeticaly, Z-A"> Alphabeticaly, Z-A </option>
                      <option value="Price low to high"> Price low to high </option>
                      <option value="Price high to low"> Price high to low </option>
                      <option value="date new to old">date new to old</option>
                      <option value="date old to new">date old to new</option>
                    </select>
                   </div>
                  <div className="d-flex align-items-center gap-10 justify-content-end">
                    <p className="total_products mb-0">21 products</p>
                    <div className="d-flex gap-10 align-items-center product_display">
                      <img onClick={() => {setGrid(3)}} src="images/gr4.svg" className="img-fluid d-block" alt="grid" />
                      <img onClick={() => {setGrid(4)}} src="images/gr3.svg" className="img-fluid d-block" alt="grid" />
                      <img onClick={() => {setGrid(6)}} src="images/gr2.svg" className="img-fluid d-block" alt="grid" />
                      <img onClick={() => {setGrid(12)}} src="images/gr.svg" className="img-fluid d-block" alt="grid" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="product_list pb-5 pt-3">
                <div className="d-flex flex-wrap">
                  <Productcard grids={grids} />
                  <Productcard grids={grids} />
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
}

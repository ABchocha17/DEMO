import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

export default function Header() {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos, doloremque.
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:{" "}
                <Link to="tel: +916354446063" className="text-white">
                  +916354446063
                </Link>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header_upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link to="/" className="text-white">AB Corner</Link>
              </h2>
            </div>
            <div className="col-5">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search product hear"
                  aria-label="Search product hear"
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header_upper_links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to="Compareproduct"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="/images/compare.svg" alt="Compare" />
                    <p className="text-white mb-0"> Compare <br /> product</p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="wishlist"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="/images/wishlist.svg" alt="wishlist" />
                    <p className="text-white mb-0"> Favourite <br /> wishlist </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="login"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="/images/user.svg" alt="user" />
                    <p className="text-white mb-0"> Log in <br /> My Account </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="cart"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="/images/cart.svg" alt="cart" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">$ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header_bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-button d-flex align-items-center gap-30">
                <div className="">
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex align-items-center gap-15" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><img src="images/menu.svg" alt="" /><span className="me-5 d-inline">Shop Categories</span></button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><Link className="dropdown-item text-white" to="/">Action</Link></li>
                    <li><Link className="dropdown-item text-white" to="/">Another action</Link></li>
                    <li><Link className="dropdown-item text-white" to="/">Something else here</Link></li>
                  </ul>
                </div>
                </div>
                <div className="menu_links">
                <div className="d-flex align-items-center gap-15">
                    <NavLink className="text-white" to="/">HOME</NavLink>
                    <NavLink className="text-white" to="store">OUR STORE</NavLink> 
                    <NavLink className="text-white" to="blogs">BLOGS</NavLink>
                    <NavLink className="text-white" to="contact">CONTACT</NavLink> 
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

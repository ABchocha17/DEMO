import React from "react";
import { Link } from "react-router-dom";
import {BsLinkedin , BsInstagram , BsYoutube , BsGithub } from 'react-icons/bs'


export default function Footer() {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer_top_data d-flex gap-30 align-items-center">
                <img src="/images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text p-3" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
      <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div className="">
                <address className="text-white fs-5">
                Makarba, Ahmedabad, <br /> Gujarat <br /> pin: 380051 
                </address>
                <Link className="d-block text-white mb-2 mt-3" to="+91 6354446360">6354446360</Link>
                <Link className="d-block text-white mb-2 mt-3" to="mailto: abchocha125@gmail.com">abchocha125@gmail.com</Link>
                <div className="social_icon d-flex gap-15 alighn-items-center mt-4">
                  <Link to="/"><BsLinkedin className="text-white fs-4"/> </Link>
                  <Link to="/"><BsInstagram className="text-white fs-4"/> </Link>
                  <Link to="/"><BsYoutube className="text-white fs-4"/> </Link>
                  <Link to="/"><BsGithub className="text-white fs-4"/> </Link>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer_links">
                <ul>
                  <li><Link className="text-white py-2 mb-1" to="/PrivacyPolicy">Privacy Policy</Link></li>
                  <li><Link className="text-white py-2 mb-1" to="/RefundPolicy">Refund Policy</Link></li>
                  <li><Link className="text-white py-2 mb-1" to="/ShipingPolicy">Shipping Policy</Link></li>
                  <li><Link className="text-white py-2 mb-1" to="/Termandcondition">Terms & Condition</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer_links">
                <ul>
                  <li><Link className="text-white py-2 mb-1" to="/about">About Us</Link></li>
                  <li><Link className="text-white py-2 mb-1" to="/">Faq</Link></li>
                  <li><Link className="text-white py-2 mb-1" to="/contact">Contact</Link></li>
                  <li><Link className="text-white py-2 mb-1" to="/blogs">Blogs</Link></li>

                </ul>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Link</h4>
              <div className="footer_links">
                <ul>
                  <li><Link className="text-white py-2 mb-1" to="/">Laptops</Link></li>
                  <li><Link className="text-white py-2 mb-1" to="/">Headphones</Link></li>
                  <li><Link className="text-white py-2 mb-1" to="/">Tablets</Link></li>
                  <li><Link className="text-white py-2 mb-1" to="/">Watch</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center text-white mb-0">
                &copy; {new Date().getFullYear()} powered by Devloper's Corners{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

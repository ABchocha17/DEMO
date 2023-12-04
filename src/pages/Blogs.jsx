import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Blog from "../components/Blog";
import Container from '../components/Container';

export default function Blogs() {
  return (
    <>
      <Meta title="Blogs" />
      <BreadCrumb title="Blogs" />
      <Container class1={`blog_wrapper home_wrapper-2 py-5 `}>
         <div className="row">
            <div className="col-3">
            <div className="filter_card mb-3">
                <h3 className="filter_title">Shop by category</h3>
                <div className="">
                  <ul className="ps-0">
                    <li>Home</li>
                    <li>Our Store</li>
                    <li>Blogs</li>
                    <li>Contact</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-9">
                <div className="row">
                    <Blog />
                    <Blog />
                </div>
            </div>
         </div>
      </Container>
    </>
  )
}

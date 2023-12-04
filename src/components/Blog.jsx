import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';


export default function Blog() {
  let location = useLocation();

  console.log(location.pathname);

  return (
    <>
      <div className={` ${location.pathname === "/blogs" ? `col-6` :"col-3"}`}>
        <div className="blog_card">
          <div className="blog_card_img mb-3">
            <img src="/images/blog-1.jpg" alt="blog" className="img-fluid" />
          </div>
          <div className="blog_content">
            <p className="date mb-0">11 JUNE, 2022</p>
            <h5 className="title">Lorem ipsum dolor sit amet.</h5>
            <p className="des">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
              reprehenderit alias cum enim maxime libero cupiditate reiciendis
              eligendi debitis vitae.
            </p>
            <Link to="/blog/:id" className="butoon_link">READ MORE</Link>
          </div>
        </div>
      </div>
    </>
  );
}

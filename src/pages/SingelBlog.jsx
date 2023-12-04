import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import Container from '../components/Container';


export default function SingelBlog() {
  return (
    <>
    <Meta title="Dynamic Blog Name" />
    <BreadCrumb title="Dynamic Blog Name" />
    <Container class1={`singelblog_wrapper home_wrapper-2 py-5 `}>
       <div className="row">
         <div className="col-12">
            <div className="singelblog_card">
                <Link to="/blogs" className='d-flex align-items-center'><FaArrowLeft className='me-1 fz-3' />Back to Blogs</Link>
                <h3 className="title">Lorem ipsum dolor sit amet.</h3>
                <img src="images/blog-1.jpg" alt="blog" className='img-fluid w-100 d-block h-100' />
                <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit enim ad excepturi aliquam nobis ipsum mollitia odit facilis obcaecati repellat, maxime in explicabo quia reprehenderit, magnam dolorem hic quod quam!</p>
            </div>
         </div>
       </div>
    </Container>
  </>
)}

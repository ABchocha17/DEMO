import React from 'react';
import {Link } from "react-router-dom";


export default function BreadCrumb(props) {
    const {title} = props;
  return (
    <>
        <div className="Bredcrum py-4">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <p className='d-flex align-items-center justify-content-center gap5 mb-0'>
                            <Link to="/" className='text-dark'>Home </Link>/ {title}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

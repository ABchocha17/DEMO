import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from '../components/Container';


export default function RefundPolicy() {
  return (
    <>
    <Meta title="Refund Policy" />
    <BreadCrumb title="Refund Policy" />
    <Container class1="refundpolicy_wrapper home_wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            Refund Policy
          </div>
        </div>
    </Container>
  </>
  )
}

import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from '../components/Container';


export default function ShipingPolicy() {
  return (
    <>
    <Meta title="Shiping Policy" />
    <BreadCrumb title="Shiping Policy" />
    <Container class1="shipingpolicy_wrapper home_wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            Shiping Policy
          </div>
        </div>
    </Container>
  </>
  )
}

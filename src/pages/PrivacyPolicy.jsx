import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from '../components/Container';


export default function PrivacyPolicy() {
  return (
    <>
    <Meta title="Privacy Policy" />
    <BreadCrumb title="Privacy Policy" />
    <Container class1="privacypolicy_wrapper home_wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            Privacy Policy
          </div>
        </div>
    </Container>
  </>
  )
}

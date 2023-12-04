import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';

export default function ForgotPassword() {
  return (
    <>
    <Meta title="Forgot Password" />
    <BreadCrumb title="Forgot Password" />
    <Container class1="login_wrapper home_wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="login_card card text-center">
                <h3 className='text-white'>Reset Your Password</h3>
                <p className="text-center text-white">we will send you an email to reset your password</p>
                <form action="" className='contact_form w-100'>
                  <div className="d-flex flex-column gap-10">
                    <div className="col">
                      <CustomInput type="email" className='form-control' placeholder='email' />
                    </div>
                    <div className="col d-flex align-items-center gap-10 link justify-content-center flex-column">
                      <button type="submit" class="btn">Submit</button>
                      <Link className="" to="/login">Cancel</Link>
                    </div>
                  </div>
                </form>
            </div>
          </div>
        </div>
    </Container>
  </>
  )
}

import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';

export default function ResetPassword() {
  return (
    <>
    <Meta title="Reset Password" />
    <BreadCrumb title="Reset Password" />
    <Container class1="login_wrapper home_wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="login_card card text-center">
                <h3 className='text-white'>Reset Password</h3>
                <form action="" className='contact_form w-100'>
                  <div className="d-flex flex-column gap-10">
                    <div className="col">
                    <CustomInput type="password" className='form-control' placeholder='password' name='password' />
                    </div>
                    <div className="col">
                    <CustomInput type="password" className='form-control' placeholder='Confirm password' name='Confpassword' />
                    </div>
                    <div className="col d-flex align-items-center gap-10 link justify-content-center">
                      <button type="submit" class="btn">Ok</button>
                    </div>
                  </div>
                </form>
            </div>
          </div>
        </div>
    </Container>
  </>
)}

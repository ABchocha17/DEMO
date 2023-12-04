import React from 'react';
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { FaHome,FaPhone,FaInfo  } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Container from '../components/Container';


export default function Contact() {
  return (
    <>
    <Meta title="Contact" />
    <BreadCrumb title="Contact" />
    <Container class1={`contact_wrapper home_wrapper-2 py-5 `}>
      <div className="container-xxl">
       <div className="row">
          <div className="col-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.74843740562!2d72.41493414253877!3d23.020474096719433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1701074637995!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="map"></iframe>
          </div>
          <div className="col-12">
            <div className="contact_inr d-flex flex-wrap mt-5">
              <div className="contact_data w-50 pe-5">
                <h3 className='contact_title text-white'>Get in touch with us</h3>
                <ul>
                  <li><FaHome /><p className='mb-0'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus dolore quasi distinctio cum similique? Illo.</p></li>
                  <li><FaPhone /><p className='mb-0'>(+91)7-723-4608</p></li>
                  <li><IoIosMail /><p className='mb-0'>demo@gmail.com</p></li>
                  <li><FaInfo /><p className='mb-0'>MonDay - Friday 10AM - 8PM</p></li>
                </ul>
              </div>
              <div className="contact_form_otr w-50">
                <h3 className='contact_title text-white'>Contact</h3>
                <form action="" className='contact_form'>
                  <div className="d-flex flex-column gap-10">
                    <div className="col">
                      <input type="text" className='form-control' placeholder='Name' />
                    </div>
                    <div className="col">
                      <input type="email" className='form-control' placeholder='Email' />
                    </div>
                    <div className="col">
                      <input type="Number" className='form-control' placeholder='Phone number' />
                    </div>
                    <div className="col">
                      <textarea name='' id=''  type="text" className='form-control' placeholder='Comment' />
                    </div>
                    <div className="col">
                      <button type="submit" class="btn">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
       </div>
      </div>
    </Container>
  </>
  )
}

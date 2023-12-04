import React from 'react';
import {Link} from "react-router-dom";
import Marquee from "react-fast-marquee";
import Blog from "../components/Blog";
import Productcard from "../components/Productcard";
import Specialproduct from "../components/Specialproduct";
import Meta from "../components/Meta";
import Container from '../components/Container';
import { services } from "../utils/Data"


export default function Home() {
  return (
    <>
      <Meta title="AB Corner" />
      <Container class1="home_wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main_banner position-relative">
              <img className='img-fluid rounded-3' src="images/main-banner-1.jpg" alt="main-banner" />
              <div className="main_banner_contant position-absolute">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>ipad S13+ Pro.</h5>
                <p>From $999.00 or $41.62/mo.</p>
                <Link className='butoon_link' to="/">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap justify-content-between align-items-center gap-10">
              <div className="small_banner position-relative">
                <img className='img-fluid rounded-3' src="images/catbanner-01.jpg" alt="main-banner"/>
                <div className="small_banner_content position-absolute">
                  <h4>Best sale</h4>
                  <h5>Laptops Max</h5>
                  <p>From $1699.00 or $64.62/mo.</p>
                </div>
              </div>
              <div className="small_banner position-relative">
                <img className='img-fluid rounded-3' src="images/catbanner-02.jpg" alt="catbanner"/>
                <div className="small_banner_content position-absolute">
                  <h4>15% off</h4>
                  <h5>Smartwatch 7</h5>
                  <p>Shop the latest band styles and colors.</p>
                </div>
              </div>
              <div className="small_banner position-relative">
                <img className='img-fluid rounded-3' src="images/catbanner-03.jpg" alt="catbanner"/>
                <div className="small_banner_content position-absolute">
                  <h4>New arrival</h4>
                  <h5>Buy ipad Air</h5>
                  <p>From $599 or $49.91/mo. for 12 mo.</p>
                </div>
              </div>
              <div className="small_banner position-relative">
                <img className='img-fluid rounded-3' src="images/catbanner-04.jpg" alt="catbanner"/>
                <div className="small_banner_content position-absolute">
                  <h4>Free engraving</h4>
                  <h5>AirPods Max</h5>
                  <p>High-fidelity playback & ultra-low distortion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home_wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="servies d-flex flex-wrap align-items-center justify-content-between">
              {services.map((s, index) => {
                return(
                  <div key={index} className="d-flex align-items-center gap-15 justify-content-center">
                    <img src={s.image} alt={s.title} />
                    <div className="">
                      <h6>{s.title}</h6>
                      <p className='mb-0'>{s.tagline}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </Container>
      
      <Container class1="home_wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex flex-wrap align-items-center justify-content-between">
              <div className="d-flex gap-30 align-items-center categories_item">
                <div className="">
                  <h6>Cameras & Videos</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="" />
              </div>
              <div className="d-flex gap-30 align-items-center categories_item">
                <div className="">
                  <h6>Smart Television</h6>
                  <p>12 Items</p>
                </div>
                <img src="images/tv.jpg" alt="" />
              </div>
              <div className="d-flex gap-30 align-items-center categories_item">
                <div className="">
                  <h6>SmartWatches</h6>
                  <p>13 Items</p>
                </div>
                <img src="images/watch.jpg" alt="" />
              </div>
              <div className="d-flex gap-30 align-items-center categories_item">
                <div className="">
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="" />
              </div>
              <div className="d-flex gap-30 align-items-center categories_item">
                <div className="">
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="" />
              </div>
              <div className="d-flex gap-30 align-items-center categories_item">
                <div className="">
                  <h6>Cameras & Videos</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="" />
              </div>
              <div className="d-flex gap-30 align-items-center categories_item">
                <div className="">
                  <h6>Smart Television</h6>
                  <p>12 Items</p>
                </div>
                <img src="images/tv.jpg" alt="" />
              </div>
              <div className="d-flex gap-30 align-items-center categories_item">
                <div className="">
                  <h6>SmartWatches</h6>
                  <p>13 Items</p>
                </div>
                <img src="images/watch.jpg" alt="" />
              </div>
              <div className="d-flex gap-30 align-items-center categories_item">
                <div className="">
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="" />
              </div>
              <div className="d-flex gap-30 align-items-center categories_item">
                <div className="">
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured_wrapper py-5 home_wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section_title">Our popular Product</h3>
          </div>
        </div>
        <div className="row">
          <Productcard />
          <Productcard />
          <Productcard />
          <Productcard />
        </div>
      </Container>
      <Container class1="famous_wrapper py-5 home_wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous_card bg-dark position-relative">
              <div className="famous_content ">
                <h5 className='text-white'>Big Screen</h5>
                <h6 className='text-white'>Smart Watch Serries 7</h6>
                <p className='text-white'>From $399 or $16.62/mo. for 24/mo.</p>
              </div>
              <img src="images/fomus.jpg" alt="" className='img-fluid' />
            </div>
          </div>
          <div className="col-3">
            <div className="famous_card position-relative">
              <div className="famous_content ">
                <h5>Big Screen</h5>
                <h6>Smart Watch Serries 7</h6>
                <p>From $399 or $16.62/mo. for 24/mo.</p>
              </div>
              <img src="images/fomus.jpg" alt="" className='img-fluid' />
            </div>
          </div>
          <div className="col-3">
            <div className="famous_card position-relative">
              <div className="famous_content ">
                <h5>Big Screen</h5>
                <h6>Smart Watch Serries 7</h6>
                <p>From $399 or $16.62/mo. for 24/mo.</p>
              </div>
              <img src="images/fomus.jpg" alt="" className='img-fluid' />
            </div>
          </div>
          <div className="col-3">
            <div className="famous_card position-relative">
              <div className="famous_content ">
                <h5>Big Screen</h5>
                <h6>Smart Watch Serries 7</h6>
                <p>From $399 or $16.62/mo. for 24/mo.</p>
              </div>
              <img src="images/fomus.jpg" alt="" className='img-fluid' />
            </div>
          </div>
        </div>
      </Container>
      <Container class1="special_wrapper home_wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section_title">Special Products</h3>
          </div>
          <Specialproduct />
          <Specialproduct />
          <Specialproduct />
          <Specialproduct />
        </div>
      </Container>
      <Container class1="marquee_wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="card_wrapper marquee_inner">
              <Marquee>
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="blog_wrapper py-5 home_wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section_title">Our Letest Blogs</h3>
          </div>
          <Blog />
          <Blog />
          <Blog />
          <Blog />
        </div>
      </Container>
    </>
  )
}

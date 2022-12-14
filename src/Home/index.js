import React, { useState } from "react";
import "./style.css";
import Footer from "../Footer";

// Assets
import PlayButton from "../assets/Play.svg";
import AppStoreBtn from "../assets/app-store-btn.svg";
import GooglePlayStoreBtn from "../assets/google-play-btn.svg";
import AppStoreBtnWhite from "../assets/app-store-btn-white.svg";
import GooglePlayStoreBtnWhite from "../assets/google-play-btn-white.svg";
import IphoneImg from "../assets/Iphone.png";
import IphoneImg2 from "../assets/Iphone2.png";
import IphoneImgSvg2 from "../assets/Iphone2.svg";
import IphoneImg3 from "../assets/Iphone3.png";
import IphoneImgSvg3 from "../assets/Iphone3.svg";
import LeadGenerateImg from "../assets/lead-generate.png";
import LeadGenerateSvg from "../assets/lead-generate.svg";
import GlobeIcon from "../assets/globe-icon.svg";
import ChatIcon from "../assets/Chat.svg";
import UserGroupIcon from "../assets/user-group.svg";
import SocialIconGroup from "../assets/social-icons-group.svg";
import HowWorksBanner from "../assets/hero-banner.png";
import HowWorksPlay from "../assets/how-it-works-play.svg";
import HowWorksIcon1 from "../assets/how-it-works-col-1.svg";
import HowWorksIcon2 from "../assets/how-it-works-col-2.svg";
import HowWorksIcon3 from "../assets/how-it-works-col-3.svg";
import DiscoverImg from "../assets/discover.png";
import DiscoverImgSvg from "../assets/discover.svg";
import ArrowImg from "../assets/arrow.svg";

import Slide2Img from "../assets/Netvrk.svg";
import Slide3Img from "../assets/marketplace.svg";

// Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/effect-cards";
import "swiper/css/mousewheel";
import { EffectFade, EffectCards, Mousewheel } from "swiper";

// Bootstrap Modal
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Home = () => {
  return (
    <section className="home position-relative" data-bs-spy="scroll">
      {/*==========================
         ====== Hero Section ====== 
         ========================== */}
      <section className="hero" id="home">
        <p>The 1st and only private network to...</p>
        <h1>
          Automate <span>Referrals</span>
        </h1>
        <div className="text-center">
          <a
            className="cta"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal1"
          >
            <img src={PlayButton} className="mb-3" />
            See how
          </a>
        </div>
        <div className="apps-links d-flex justify-content-center">
          <a
            href="https://apps.apple.com/us/app/fryends/id1451445801"
            target="_blank"
          >
            <img src={AppStoreBtn} alt="app store btn" className="me-3" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.fryend"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GooglePlayStoreBtn} alt="google play store btn" />
          </a>
        </div>
      </section>
      <div id="theTech">
        {/*================================
         ====== Feature Section 01 ====== 
         ================================ */}
        <section className="fr-container mb-4 feature-section section-card position-relative d-lg-flex">
          <img src={GlobeIcon} className="feature-icon" alt="globe icon" />
          <div className="feature-text order-1">
            <h2 className="section-header">
              Your network can work harder,{" "}
              <span className="gradient-text">automate</span> it!
            </h2>
            <p className="section-text">
              The best referrals are from word of mouth, we just automated them.
            </p>
            <a
              className="feature-btn d-flex align-items-center"
              style={{ gap: "25px" }}
              href="#"
              target="_blank"
            >
              Subscribe{" "}
              <img height={"12px"} className="d-inline" src={ArrowImg} />
            </a>
          </div>
          <div className="feature-img clipped order-0 mt-lg-0 me-lg-5">
            {/* <img className="img-fluid" src={IphoneImg} /> */}
          </div>
        </section>
        {/*================================
         ====== Feature Section 02 ====== 
         ================================ */}
        <section className="fr-container mb-4 feature-section section-card position-relative d-lg-flex justify-content-between">
          <img src={ChatIcon} className="feature-icon" alt="globe icon" />
          <div className="feature-text me-lg-3">
            <h2 className="section-header text-end text-xl-start">
              Strong warm <br className="d-block d-sm-none" />
              <span className="gradient-text">introductions</span>
            </h2>
            <p className="section-text text-end" style={{ maxWidth: "740px" }}>
              via unique three-way chatrooms.
            </p>
          </div>
          <div className="feature-img mt-lg-0 flex-grow-1">
            <img src={IphoneImgSvg2} className="m-auto h-100" />
          </div>
        </section>
        <div className="mobile-only mb-4 d-block d-lg-none">
          <div className="fr-container px-0">
            <div className="feature-img mt-4">
              <img src={IphoneImgSvg3} className="m-auto" />
            </div>
          </div>
        </div>
        {/*================================
         ====== Feature Section 03 ====== 
         ================================ */}
        <section className="d-lg-flex fr-container p-0">
          <section className="fr-container mb-4 mt-4 me-lg-4 feature-section section-card position-relative text-center">
            <img
              src={UserGroupIcon}
              className="feature-icon"
              alt="globe icon"
            />
            <h2 className="section-header text-lg-start">
              From your
              <span className="gradient-text"> Fryends,</span>
            </h2>
            <p className="section-text text-lg-start">we generate leads</p>
            <div className="feature-img">
              <img src={LeadGenerateSvg} />
            </div>
          </section>
          {/*==============================================
         ====== Section with Gradient Background ====== 
         ============================================== */}
          <section className="desktop-only mb-4 d-flex flex-column justify-content-between">
            <div className="mb-4 d-none d-lg-block flex-grow-1 mb-5">
              <div
                className="fr-container section-card pt-0 h-100"
                style={{ paddingLeft: "50px", paddingRight: "50px" }}
              >
                <div className="feature-img mt-4 h-100">
                  <img src={IphoneImgSvg3} className="m-auto side-img" />
                </div>
              </div>
            </div>
            <section className="gradient-section">
              <h2 className="section-header text-white m-auto">
                From hot leads to{" "}
                <span className="gradient-text">closed deals.</span>
              </h2>
            </section>
          </section>
        </section>

        {/*================================
         ====== Feature Section 04 (Slider) ====== 
         ================================ */}
        {/* swiper start */}
        <Swiper
          modules={[EffectFade, Mousewheel]}
          spaceBetween={50}
          direction={"horizontal"}
          speed={1000}
          effect={"fade"}
          slidesPerView={"auto"}
          mousewheel={{
            releaseOnEdges: true,
          }}
          onSlideChange={(swiper) => {
            setTimeout(() => {
              swiper.params.mousewheel.releaseOnEdges = false;
            }, 500);
          }}
          onReachBeginning={(swiper) => {
            setTimeout(() => {
              swiper.params.mousewheel.releaseOnEdges = true;
            }, 750);
          }}
          onReachEnd={(swiper) => {
            setTimeout(() => {
              swiper.params.mousewheel.releaseOnEdges = true;
            }, 750);
          }}
        >
          {/* 01 */}
          <SwiperSlide>
            <section className="fr-container mb-4 feature-section section-card position-relative d-lg-flex justify-content-between">
              <div className="social-text">
                <h2 className="section-header social-feature-header">
                  No <span className="gradient-text">connection</span> needed to
                  any of your social accounts...
                </h2>
                <p className="section-text text-center d-none d-lg-block">
                  You would really only need your most trusted fryends. likely
                  no more than about 50-70...
                </p>
              </div>
              <div className="feature-img">
                <img src={SocialIconGroup} />
              </div>
              <p className="section-text text-center d-block d-lg-none">
                You would really only need your most trusted fryends. likely no
                more than about 50-70...
              </p>
            </section>
          </SwiperSlide>
          {/* 02 */}
          <SwiperSlide>
            <section className="fr-container mb-4 feature-section section-card position-relative d-lg-flex justify-content-between ">
              <div className="social-text">
                <h2 className="section-header social-feature-header">
                  You would<span className="gradient-text"> really only</span>{" "}
                  need your most
                  <span className="gradient-text"> trusted fryends.</span>
                </h2>
                <p className="section-text text-center d-none d-lg-block">
                  We are not just any job marketplace not upwork, not fiverr,
                  not thumbtack...
                </p>
              </div>
              <div className="feature-img">
                <img src={Slide2Img} />
              </div>
              <p className="section-text text-center d-block d-lg-none">
                You would really only need your most trusted fryends. likely no
                more than about 50-70...
              </p>
            </section>
          </SwiperSlide>
          {/* 03 */}
          <SwiperSlide>
            <section className="fr-container mb-4 feature-section section-card position-relative d-lg-flex justify-content-between ">
              <div className="social-text">
                <h2 className="section-header social-feature-header">
                  We are not just any
                  <span className="gradient-text"> job marketplace </span>
                  not upwork, not fiverr, not thumbtack...
                </h2>
              </div>
              <div className="feature-img">
                <img src={Slide3Img} />
              </div>
            </section>
          </SwiperSlide>
        </Swiper>
        {/* swiper end */}

        {/*================================
         ====== How it works Section ====== 
         ================================ */}
        <section className="how-it-works fr-container section-card bg-transparent px-0">
          <h2 className="section-header text-center mb-3 mb-lg-5">
            How it works
          </h2>
          <div className="how-it-works__banner position-relative">
            <div className="overlay"></div>
            <div className="content position-relative text-center">
              <a
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal2"
              >
                <img src={HowWorksPlay} className="m-auto" />
              </a>
              <h3 className="text">
                The best referrals <span>are</span> word of mouth.
              </h3>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="how-it-works__col">
                  <img src={HowWorksIcon1} className="m-auto" />
                  <h3>Auto-Referrals</h3>
                  <p>
                    Fryends constantly scours your network looking for jobs that
                    match your skills.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="how-it-works__col">
                  <img src={HowWorksIcon2} className="m-auto" />
                  <h3>Leads</h3>
                  <p>
                    The system then notifies you of all potential jobs and
                    clients that match you.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="how-it-works__col">
                  <img src={HowWorksIcon3} className="m-auto" />
                  <h3>Introductions</h3>
                  <p>
                    Your mutual fryend will proceed to make the proper
                    introductions in a new three-way chatroom.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*==========================
         ====== Faqs Section ====== 
         ========================== */}
        <section className="fr-container mb-4 feature-section section-card position-relative faq-section">
          <h2 className="section-header mb-3">
            Frequently <br className="d-block d-md-none" />
            <span className="gradient-text">asked..</span>
          </h2>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Can you let me know how this fryends app work?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  How can I send friend request on fryends app?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Is this a paid or free app?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*==============================================
         ====== Section with Gradient Background ====== 
         ============================================== */}
        <section className="fr-container  gradient-section pt-5 pb-0">
          <div className="row">
            <div className="col-md-6">
              <div className="apps-links d-flex justify-content-center justify-content-lg-start mt-0 mb-4">
                <a
                  href="https://apps.apple.com/us/app/fryends/id1451445801"
                  target="_blank"
                >
                  <img
                    src={AppStoreBtnWhite}
                    alt="app store btn"
                    className="me-3"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.fryend"
                  target="_blank"
                >
                  <img
                    src={GooglePlayStoreBtnWhite}
                    alt="google play store btn"
                  />
                </a>
              </div>
              <h2 className="section-header text-white m-auto mb-4">
                Discover even <br />
                <span className="gradient-text">more</span>
              </h2>
            </div>
            <div className="col-md-6">
              <img src={DiscoverImgSvg} className="ms-lg-auto" />
            </div>
          </div>
        </section>
      </div>
      <Footer />
      {/* Modal 1 */}
      <div
        className="modal fade"
        id="exampleModal1"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered ">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <iframe
                width="916"
                height="515"
                src="https://www.youtube.com/embed/pJuqZeSwNtI"
                title="SLOW MOTION / CINEMATIC BACKGROUND MUSIC"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Modal 2 */}
      <div
        className="modal fade"
        id="exampleModal2"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel2"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered ">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <iframe
                width="916"
                height="515"
                src="https://www.youtube.com/embed/pJuqZeSwNtI"
                title="SLOW MOTION / CINEMATIC BACKGROUND MUSIC"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

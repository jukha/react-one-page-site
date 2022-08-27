import "./style.css";
import PlayButton from "../assets/Play.svg";
import AppStoreBtn from "../assets/app-store-btn.svg";
import GooglePlayStoreBtn from "../assets/google-play-btn.svg";
import AppStoreBtnWhite from "../assets/app-store-btn-white.svg";
import GooglePlayStoreBtnWhite from "../assets/google-play-btn-white.svg";
import IphoneImg from "../assets/Iphone.png";
import IphoneImg2 from "../assets/Iphone2.png";
import IphoneImg3 from "../assets/Iphone3.png";
import LeadGenerateImg from "../assets/lead-generate.png";
import GlobeIcon from "../assets/globe-icon.svg";
import ChatIcon from "../assets/Chat.svg";
import UserGroupIcon from "../assets/user-group.svg";
import SocialIconGroup from "../assets/social-icons-group.svg";
import HowWorksBanner from "../assets/hero-banner.png";
import HowWorksIcon1 from "../assets/how-it-works-col-1.svg";
import HowWorksIcon2 from "../assets/how-it-works-col-2.svg";
import HowWorksIcon3 from "../assets/how-it-works-col-3.svg";
import DiscoverImg from "../assets/discover.png";

const Home = () => {
  return (
    <section className="home">
      {/*==========================
         ====== Hero Section ====== 
         ========================== */}
      <section className="hero">
        <p>The 1st and only private network to...</p>
        <h1>
          Automate <span>Referrals</span>
        </h1>
        <div className="text-center">
          <a className="cta">
            <img src={PlayButton} className="mb-3" />
            See how
          </a>
        </div>
        <div className="apps-links d-flex justify-content-center">
          <img src={AppStoreBtn} alt="app store btn" className="me-3" />
          <img src={GooglePlayStoreBtn} alt="google play store btn" />
        </div>
      </section>
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
          <a className="feature-btn">Subscribe</a>
        </div>
        <div className="feature-img order-0 mt-lg-0 me-lg-5">
          <img src={IphoneImg} />
        </div>
      </section>
      {/*================================
         ====== Feature Section 02 ====== 
         ================================ */}
      <section className="fr-container mb-4 feature-section section-card position-relative">
        <img src={ChatIcon} className="feature-icon" alt="globe icon" />
        <h2 className="section-header text-end">
          Strong warm <br className="d-block d-sm-none" />
          <span className="gradient-text">introductions</span>
        </h2>
        <p className="section-text text-end">via unique three-way chatrooms.</p>
        <div className="feature-img">
          <img src={IphoneImg2} className="m-auto" />
        </div>
      </section>
      <div className="mobile-only mb-4 d-block d-lg-none">
        <div className="fr-container">
          <div className="feature-img mt-4">
            <img src={IphoneImg3} className="m-auto" />
          </div>
        </div>
      </div>
      {/*================================
         ====== Feature Section 03 ====== 
         ================================ */}
      <section className="fr-container mb-4 feature-section section-card position-relative text-center">
        <img src={UserGroupIcon} className="feature-icon" alt="globe icon" />
        <h2 className="section-header">
          From your
          <span className="gradient-text">Fryends,</span>
        </h2>
        <p className="section-text">we generate leads</p>
        <div className="feature-img">
          <img src={LeadGenerateImg} />
        </div>
      </section>
      {/*==============================================
         ====== Section with Gradient Background ====== 
         ============================================== */}
      <section className="gradient-section">
        <h2 className="section-header text-white m-auto">
          From hot leads to <span className="gradient-text">closed deals.</span>
        </h2>
      </section>
      {/*================================
         ====== Feature Section 04 ====== 
         ================================ */}
      <section className="fr-container mb-4 feature-section section-card position-relative">
        <img src={GlobeIcon} className="feature-icon" alt="globe icon" />
        <h2 className="section-header social-feature-header">
          No <span className="gradient-text">connection</span> needed to any of
          your social accounts...
        </h2>
        <div className="feature-img">
          <img src={SocialIconGroup} />
        </div>
        <p className="section-text text-center">
          You would really only need your most trusted fryends. likely no more
          than about 50-70...
        </p>
      </section>
      {/*================================
         ====== How it works Section ====== 
         ================================ */}
      <section className="how-it-works">
        <div className="fr-container">
          <h2 className="section-header text-center mb-3">How it works</h2>
          <div className="how-it-works__banner"></div>
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
                  The system then notifies you of all potential jobs and clients
                  that match you.
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
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
            <div className="apps-links d-flex justify-content-center mt-0 mb-4">
              <img
                src={AppStoreBtnWhite}
                alt="app store btn"
                className="me-3"
              />
              <img src={GooglePlayStoreBtnWhite} alt="google play store btn" />
            </div>
            <h2 className="section-header text-white m-auto mb-4">
              Discover even <br />
              <span className="gradient-text">more</span>
            </h2>
          </div>
          <div className="col-md-6">
            <img src={DiscoverImg} />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;

import "./style.css";
import PlayButton from "../assets/Play.svg";
import AppStoreBtn from "../assets/app-store-btn.svg";
import GooglePlayStoreBtn from "../assets/google-play-btn.svg";
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

const Home = () => {
  return (
    <section class="home">
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
      <section className=" mb-4 feature-section section-card position-relative">
        <div className="fr-container">
          <img src={GlobeIcon} class="feature-icon" alt="globe icon" />
          <h2 className="section-header">
            Your network can work harder,{" "}
            <span className="gradient-text">automate</span> it!
          </h2>
          <p className="section-text">
            The best referrals are from word of mouth, we just automated them.
          </p>
          <a className="feature-btn">Subscribe</a>
          <div className="feature-img">
            <img src={IphoneImg} />
          </div>
        </div>
      </section>
      {/*================================
         ====== Feature Section 02 ====== 
         ================================ */}
      <section className=" mb-4 feature-section section-card position-relative">
        <div className="fr-container">
          <img src={ChatIcon} class="feature-icon" alt="globe icon" />
          <h2 className="section-header text-end">
            Strong warm <br className="d-block d-sm-none" />
            <span className="gradient-text">introductions</span>
          </h2>
          <p className="section-text text-end">
            via unique three-way chatrooms.
          </p>
          <div className="feature-img">
            <img src={IphoneImg2} className="m-auto" />
          </div>
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
      <section className="mb-4 feature-section section-card position-relative text-center">
        <div className="fr-container">
          <img src={UserGroupIcon} class="feature-icon" alt="globe icon" />
          <h2 className="section-header">
            From your
            <span className="gradient-text">Fryends,</span>
          </h2>
          <p className="section-text">we generate leads</p>
          <div className="feature-img">
            <img src={LeadGenerateImg} />
          </div>
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
      <section className="mb-4 feature-section section-card position-relative">
        <div className="fr-container">
          <img src={GlobeIcon} class="feature-icon" alt="globe icon" />
          <h2 className="section-header">
            No
            <span className="gradient-text">connection</span>
            needed to any of your social accounts...
          </h2>
          <div className="feature-img">
            <img src={SocialIconGroup} />
          </div>
          <p className="section-text text-center">
            You would really only need your most trusted fryends. likely no more
            than about 50-70...
          </p>
        </div>
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
      <section className=" mb-4 feature-section section-card position-relative">
        <div className="fr-container">
          <img src={GlobeIcon} class="feature-icon" alt="globe icon" />
          <h2 className="section-header">
            Frequently <br className="d-block d-md-none" />
            <span className="gradient-text">asked..</span>
          </h2>
        </div>
      </section>
    </section>
  );
};

export default Home;

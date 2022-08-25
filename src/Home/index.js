import "./style.css";
import PlayButton from "../assets/Play.svg";
import AppStoreBtn from "../assets/app-store-btn.svg";
import GooglePlayStoreBtn from "../assets/google-play-btn.svg";

const Home = () => {
  return (
    <section class="home">
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

      <section className="fr-container">
        <div className="feature-section section-card">
          <h2 className="section-header">
            Your network can work harder,{" "}
            <span className="gradient-text">automate</span> it!
          </h2>
        </div>
      </section>
    </section>
  );
};

export default Home;

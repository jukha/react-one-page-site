import "./style.css";
import logo from "../assets/Logo.svg";
import FbIcon from "../assets/facebook.svg";
import TwitterIcon from "../assets/twitter.svg";
import InstaIcon from "../assets/instagram.svg";
import LinkedinIcon from "../assets/linkedin.svg";
import YtIcon from "../assets/youtube.svg";

const Footer = () => {
  return (
    <footer id="contact">
      <div className="fr-container px-sm-0">
        <div className="row justify-content-between">
          <div className="col-md-6 d-flex flex-column align-items-center align-items-lg-start">
            <img src={logo} className="logo" alt="logo" />
            <p className="my-4 footer-tagline">
              The best referrals are from "Word of Mouth.” We{" "}
              <span>automated</span> it!
            </p>
            <div className="social-links">
              <img src={FbIcon} alt="facebook icon" />
              <img src={TwitterIcon} alt="twitter icon" />
              <img src={InstaIcon} alt="instagram icon" />
              <img src={LinkedinIcon} alt="linkedin icon" />
              <img src={YtIcon} alt="youtube icon" />
            </div>
            <p className="copyright cr-desktop d-none d-lg-block">
              © All Right Reserved by Fryends
            </p>
          </div>
          <div className="col-md-4">
            <div className="signup-box py-3 my-3" id="subscribe">
              <h4>Already 10,000+ ahead of you!</h4>
              <p>
                Signup to stay up to date as we grow and generate more and more
                leads!
              </p>
            </div>
            <form className="subscribe-form">
              <div className="form-control  d-flex">
                <input
                  type="email"
                  className="border-0"
                  placeholder="Email Address"
                />
                <input
                  type="submit"
                  className="button border-0"
                  value="Subscribe"
                />
              </div>
            </form>
            <p className="copyright cr-mobile d-block d-lg-none">
              © All Right Reserved by Fryends
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

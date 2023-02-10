import WorkingPersonImg from "../../assets/illustration-working.svg";

import "./herosection.scss";

export default function HeroSection() {
  return (
    <div className="hero-wrapper">
      <div className="hero-wrapper-left-content">
        <span className="hero-title">
          More than just
          <br />
          shorter links
        </span>
        <p className="hero-desc">
          Build your brand's recognition and get detailed
          <br /> insights on how your links are performing.
        </p>
        <button className="hero-action-btn">Get Started</button>
      </div>
      <div className="hero-wrapper-right-content">
        <img src={WorkingPersonImg} alt="working-person" className="hero-img" />
      </div>
    </div>
  );
}

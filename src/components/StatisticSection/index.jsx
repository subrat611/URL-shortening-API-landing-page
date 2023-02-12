import BrandRecognitionIcon from "../../assets/icon-brand-recognition.svg";
import DetailedRecordsIcon from "../../assets/icon-detailed-records.svg";
import FullyCustomizableIcon from "../../assets/icon-fully-customizable.svg";

import "./statistic.scss";

export default function StatisticSection() {
  return (
    <div className="statistic-wrapper">
      <div className="statistic-header">
        <p className="statistic-title">Advanced Statistic</p>
        <p className="statistic-desc">
          Track how your links are performing accoss the web with
          <br />
          our advanced statistics dashboard.
        </p>
      </div>
      <div className="statistic-card-wrapper">
        <div className="statistic-card card--one">
          <div className="statistic-card-icon">
            <img src={BrandRecognitionIcon} alt="icon-brand-recognition" />
          </div>
          <div className="statistic-card-body">
            <p className="card-body-title">Brand Recognition</p>
            <p className="card-body-desc">
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
        </div>
        <div className="statistic-card card--two">
          <div className="statistic-card-icon">
            <img src={DetailedRecordsIcon} alt="icon-detailed-records" />
          </div>
          <div className="statistic-card-body">
            <p className="card-body-title">Detailed Records</p>
            <p className="card-body-desc">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
        </div>
        <div className="statistic-card card--three">
          <div className="statistic-card-icon">
            <img src={FullyCustomizableIcon} alt="icon-brand-recognition" />
          </div>
          <div className="statistic-card-body">
            <p className="card-body-title">Fully Customizable</p>
            <p className="card-body-desc">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";

import "./shorturllist.scss";

export default function ShortUrlList({ urls }) {
  const [activeBtn, setActiveBtn] = useState(null);

  return (
    <div className="short-url-list-wrapper">
      <div className="short-url-list">
        {urls.map((url, i) => (
          <div className="list-wrapper" key={i}>
            <p className="list-link">{url.actualLink}</p>
            <div className="list-short-link">
              <p className="short-list-link">{url.shortLink}</p>
              <button
                className={
                  activeBtn === i ? "list-copy-btn active-btn" : "list-copy-btn"
                }
                onClick={() => {
                  setActiveBtn(i);
                  navigator.clipboard.writeText(url.shortLink);
                }}
              >
                Copy!
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

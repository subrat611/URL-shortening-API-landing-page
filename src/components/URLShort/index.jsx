import { useState } from "react";
import { useEffect } from "react";
import "./urlshort.scss";

export default function URLShort({ dispatch }) {
  const [inputUrl, setInputUrl] = useState("");
  const [inputError, setInputError] = useState(false);

  useEffect(() => {
    getShortUrl();
  }, []);

  async function getShortUrl() {
    if (inputUrl !== "") {
      const res = await (
        await fetch(`https://api.shrtco.de/v2/shorten?url=${inputUrl}`)
      ).json();
      dispatch({
        type: "ADD_SHORT_LINK",
        payload: {
          actualLink: inputUrl,
          shortLink: res.result.full_short_link,
        },
      });
    }
  }

  const validateURL = () => {
    if (inputUrl !== "") {
      getShortUrl();
      setInputError(false);
    } else {
      setInputError(true);
    }
  };

  return (
    <form
      className="url-form-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        validateURL();
      }}
    >
      <div className="url-input-wrapper">
        <input
          type="text"
          className={inputError ? "url-input input-error" : "url-input"}
          placeholder="Shorten a link here..."
          onChange={(e) => {
            setInputError(false);
            setInputUrl(e.target.value);
          }}
        />
        <span
          className={inputError ? "url-input-error visible" : "url-input-error"}
        >
          Please add a link
        </span>
      </div>
      <button type="submit" className="form-submit-btn">
        Shorten It!
      </button>
    </form>
  );
}

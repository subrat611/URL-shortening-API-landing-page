import "./urlshort.scss";

export default function URLShort() {
  return (
    <form className="url-form-wrapper">
      <div className="url-input-wrapper">
        <input
          type="text"
          className="url-input"
          placeholder="Shorten a link here..."
        />
        <span className="url-input-error">Please add a link</span>
      </div>
      <button type="submit" className="form-submit-btn">
        Shorten It!
      </button>
    </form>
  );
}

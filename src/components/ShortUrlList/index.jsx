import "./shorturllist.scss";

export default function ShortUrlList({ urls }) {
  console.log(urls);
  return (
    <div className="short-url-list-wrapper">
      <div className="short-url-list">
        {urls.map((url, i) => (
          <div className="list-wrapper" key={i}>
            <p className="list-link">{url.actualLink}</p>
            <div className="list-short-link">
              <p className="short-list-link">{url.shortLink}</p>
              <button className="list-copy-btn">Copy!</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

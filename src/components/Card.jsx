import { BookmarkAddedSvg, BookmarkSvg, DotSvg, MovieSvg, SeriesSvg } from "../Svg";

import { Bookmarks } from "../App";
import { useContext } from "react";

export default function Card({ title, image, release_date, type, age_rating, trailer }) {
  const { bookmarks, setBookmarks } = useContext(Bookmarks);

  function handleBookmarks() {
    if (bookmarks.includes(title)) {
      setBookmarks(bookmarks.filter((item) => item !== title));
    } else {
      setBookmarks([...bookmarks, title]);
    }
  }
  return (
    <div className="card-container">
      <button onClick={handleBookmarks}>{bookmarks.find((item) => item === title) ? <BookmarkAddedSvg /> : <BookmarkSvg />}</button>
      <div className="card" onClick={() => window.open(trailer, "_blank")}>
        <figure>
          <img src={image} />
        </figure>
        <div className="card-text">
          <div className="card-data">
            <span>{new Date(release_date).getFullYear()}</span>
            <DotSvg />
            <span>
              {type === "movie" ? <MovieSvg /> : <SeriesSvg />}
              {type}
            </span>
            <DotSvg />
            <span>{age_rating}</span>
          </div>
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
}

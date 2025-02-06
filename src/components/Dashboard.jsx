import { BookmarkAddedSvg, BookmarkSvg, DotSvg, MovieSvg, SeriesSvg } from "../Svg";
import { Bookmarks, Data } from "../App";
import { useContext, useState } from "react";

import Card from "./Card";

export default function Dashboard() {
  const data = useContext(Data);
  const [searchText, setSearchText] = useState("");

  return (
    <main>
      <input type="text" placeholder="Search for movies or TV series" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
      {searchText.trim() ? <DashboardSearch data={data} searchText={searchText} /> : <DashboardMain data={data} />}
    </main>
  );
}

function DashboardMain({ data }) {
  return (
    <>
      <h2>Trending</h2>
      <div className="dashboard-trendingPanel">
        {data
          ?.filter((item) => item.trending)
          .map((item, i) => (
            <CardTrend key={i} {...item} />
          ))}
      </div>
      <h2>Recommended for you</h2>
      <div className="dasboard-grid">
        {data?.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </div>
    </>
  );
}

function CardTrend({ title, image, release_date, type, age_rating, trailer }) {
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
      <div className="card-trend" onClick={() => window.open(trailer, "_blank ")}>
        <img src={image} />
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

function DashboardSearch({ data, searchText }) {
  const filteredData = data.filter((item) => item.title.toLowerCase().includes(searchText.toLowerCase()));
  return (
    <>
      <h2>
        Found {filteredData.length} results for ‘{searchText}’
      </h2>
      <div className="dasboard-grid">
        {filteredData.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </div>
    </>
  );
}

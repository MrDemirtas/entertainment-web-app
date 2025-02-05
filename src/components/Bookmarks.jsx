import { Data, Bookmarks as MyBookmarks } from "../App";
import { useContext, useState } from "react";

import Card from "./Card";

export default function Bookmarks() {
  const data = useContext(Data);
  const { bookmarks } = useContext(MyBookmarks);
  const [searchText, setSearchText] = useState("");
  const filteredData = data?.filter((item) => bookmarks.includes(item.title));

  return (
    <main>
      <input type="text" placeholder="Search for bookmarks" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
      <h2>Bookmarked Movies</h2>
      <div className="dasboard-grid">
        {filteredData
          ?.filter((item) => item.type === "movie")
          .filter((item) => item.title.toLowerCase().includes(searchText.toLowerCase()))
          .map((item, i) => (
            <Card key={i} {...item} />
          ))}
      </div>
      <h2>Bookmarked TV Series</h2>
      <div className="dasboard-grid">
        {filteredData
          ?.filter((item) => item.type === "series")
          .filter((item) => item.title.toLowerCase().includes(searchText.toLowerCase()))
          .map((item, i) => (
            <Card key={i} {...item} />
          ))}
      </div>
    </main>
  );
}

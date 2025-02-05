import { useContext, useState } from "react";

import Card from "./Card";
import { Data } from "../App";

export default function Series() {
  const data = useContext(Data);
  const [searchText, setSearchText] = useState("");

  return (
    <main>
      <input type="text" placeholder="Search for series" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
      <h2>Series</h2>
      <div className="dasboard-grid">
        {data
          ?.filter((item) => item.type === "series")
          .filter((item) => item.title.toLowerCase().includes(searchText.toLowerCase()))
          .map((item, i) => (
            <Card key={i} {...item} />
          ))}
      </div>
    </main>
  );
}

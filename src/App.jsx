import { createContext, useEffect } from "react";

import Header from "./components/Header";
import { getPage } from "./helper";
import { useState } from "react";

export const Data = createContext(null);
export const Bookmarks = createContext(null);
export default function App() {
  const [router, setRouter] = useState(location.hash.substring(1) || "/");
  const [data, setData] = useState([]);
  const [bookmarks, setBookmarks] = useState(localStorage.bookmarks ? JSON.parse(localStorage.bookmarks) : []);

  useEffect(() => {
    window.addEventListener("hashchange", () => setRouter(location.hash.substring(1) || "/"));
    fetch("/data/data.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    localStorage.bookmarks = JSON.stringify(bookmarks);
  }, [bookmarks]);

  return (
    <>
      <Header />
      <Data.Provider value={data}>
        <Bookmarks.Provider value={{ bookmarks, setBookmarks }}>{getPage(router)}</Bookmarks.Provider>
      </Data.Provider>
    </>
  );
}

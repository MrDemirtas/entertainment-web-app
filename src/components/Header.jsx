import { BookmarkSvg, DashboardSvg, MovieSvg, SeriesSvg } from "../Svg";

export default function Header() {
  return (
    <header>
      <figure>
        <img src="/svg/logo.svg" alt="Logo" />
      </figure>
      <nav>
        <ul>
          <li className={(location.hash.substring(1) || "/") === "/" ? "active" : ""}>
            <a href="#/">
              <DashboardSvg />
            </a>
          </li>
          <li className={location.hash.substring(1) === "/movies" ? "active" : ""}>
            <a href="#/movies">
              <MovieSvg />
            </a>
          </li>
          <li className={location.hash.substring(1) === "/series" ? "active" : ""}>
            <a href="#/series">
              <SeriesSvg />
            </a>
          </li>
          <li className={location.hash.substring(1) === "/bookmarks" ? "active" : ""}>
            <a href="#/bookmarks">
              <BookmarkSvg />
            </a>
          </li>
        </ul>
      </nav>
      <img src="/images/avatar.png" alt="Avatar" />
    </header>
  );
}

import Bookmarks from "./components/Bookmarks";
import Dashboard from "./components/Dashboard";
import Movies from "./components/Movies";
import Series from "./components/Series";

const routers = [
  {
    url: '/',
    component: <Dashboard />,
  },
  {
    url: '/movies',
    component: <Movies />,
  },
  {
    url: '/series',
    component: <Series />,
  },
  {
    url: '/bookmarks',
    component: <Bookmarks />,
  }
]

export function getPage(url) {
  return routers.findLast(router => url.startsWith(router.url))?.component || <h1>404 Not Found</h1>;
}
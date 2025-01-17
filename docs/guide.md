```tsx
import { CachedRouter, Outlet, Link, type RouteItem } from 'react-cached-router';

const PageA = () => (
  <div>
    page A <input />
  </div>
);

const PageB = () => (
  <div>
    page B <input />
  </div>
);

const Layout = () => (
  <div>
    <h2>demo</h2>
    <nav>
      <Link to="/a"><button>Page A</button></Link>
      <Link to="/b"><button>Page B</button></Link>
    </nav>
    <Outlet />
  </div>
);

const router: RouteItem[] = [
  {
    path: '/a',
    name: 'a',
    component: PageA,
  },
  {
    path: '/b',
    name: 'b',
    component: PageB,
  },
];

export default () => {
  return (
    <CachedRouter router={router} defaultPath="/a">
      <Layout />
    </CachedRouter>
  );
};
```

//
// import config from '../config/routes';
import config from 'config';

// page
import Home from 'pages/Home';
import Following from 'pages/Following';
import Profile from 'pages/Profile';
import Upload from 'pages/Upload';
import Search from 'pages/Search';
import Login from '../features/auth/Login';
import register from '../features/auth/register';

//layout
import { HeaderOnly } from '~/components/Layout';

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.search, component: Search, Layout: null },
  { path: config.routes.upload, component: Upload, Layout: HeaderOnly },
  { path: config.routes.login, component: Login, Layout: HeaderOnly },
  { path: config.routes.register, component: register, Layout: HeaderOnly },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };

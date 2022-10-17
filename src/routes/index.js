//
import config from '../config/routes';

// page
import Home from 'pages/Home';
import Following from 'pages/Following';
import Profile from 'pages/Profile';
import Upload from 'pages/Upload';
import Search from 'pages/Search';
import LoginPage from '~/Auth/LoginPage';

//layout
import { HeaderOnly } from '~/components/Layout';

const publicRoutes = [
  { path: config.home, component: Home },
  { path: config.following, component: Following },
  { path: config.profile, component: Profile },
  { path: config.search, component: Search, Layout: null },
  { path: config.upload, component: Upload, Layout: HeaderOnly },

  { path: config.login, component: LoginPage, Layout: HeaderOnly },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };

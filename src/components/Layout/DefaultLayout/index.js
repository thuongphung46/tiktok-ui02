// import Header from '~/components/Layout/components/Header';
import Header from '../components/Header';
import Slidebar from '../components/SlideBar/sidebar';

import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
const cs = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cs('wrapper')}>
      <Header />
      <div className={cs('container')}>
        <Slidebar />
        <div className={cs('content')}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;

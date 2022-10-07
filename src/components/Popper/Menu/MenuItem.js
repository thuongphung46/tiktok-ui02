import Button from 'components/Button';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
const cs = classNames.bind(styles);
function MenuItem({ data }) {
  return (
    <Button className={cs('menu-item')} lelfIcon={data.icon} to={data.to}>
      {data.title}
    </Button>
  );
}

export default MenuItem;

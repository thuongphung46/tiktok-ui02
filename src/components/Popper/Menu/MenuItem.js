import Button from 'components/Button';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
const cs = classNames.bind(styles);
function MenuItem({ data, onClick }) {
  return (
    <Button fixWidth className={cs('menu-item')} lelfIcon={data.icon} to={data.to} onClick={onClick}>
      {data.title}
    </Button>
  );
}

export default MenuItem;

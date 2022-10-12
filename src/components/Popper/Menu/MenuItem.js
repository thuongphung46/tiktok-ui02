import Button from 'components/Button';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
const cs = classNames.bind(styles);
function MenuItem({ data, onClick }) {
  const classes = cs('menu-item', {
    separate: data.separate,
  });

  return (
    <Button className={classes} lelfIcon={data.icon} to={data.to} onClick={onClick}>
      {data.title}
    </Button>
  );
}

export default MenuItem;

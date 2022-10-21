import styles from './SlideBar.module.scss';
import classNames from 'classnames/bind';
import { config } from 'process';
import Menu from 'components/Popper/Menu';
const cs = classNames.bind(styles);
function Sidebar() {
  return (
    <aside className={cs('wrapper')}>
      <Menu>
        <MenuItems title="For your" to={'/home'} />
      </Menu>
    </aside>
  );
}

export default Sidebar;

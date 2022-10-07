import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';

import styles from './Menu.module.scss';
const cs = classNames.bind(styles);
function Menu({ children, items = [] }) {
  const renderItems = () => {
    return items.map((item, index) => <MenuItem key={index} data={item} />);
  };

  return (
    <Tippy
      interactive
      visible
      placement="bottom-end"
      render={(attrs) => (
        <div className={cs('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cs('menu-popper')}>{renderItems()}</PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;

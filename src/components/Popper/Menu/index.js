import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
const cs = classNames.bind(styles);
const defaultFn = () => {}; //default funtion trống

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  // Reset to first page

  return (
    <Tippy
      interactive
      // visible //hiện hoặc ẩn thanh menu
      offset={[13, 8]} //dịch menu
      delay={[0, 700]} //di chuột ra khỏi menu 700ms sau mới mất
      placement="bottom-end" //cố định menu bên dưới
      hideOnClick={hideOnClick} //click vô avatar ko bị mất menu
      render={(
        attrs, // cấu trúc tippy
      ) => (
        <div className={cs('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cs('menu-popper')}>
            {history.length > 1 && (
              <Header
                title={'Language'}
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}

            <div className={cs('menu-body')}>{renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
    >
      {children}
    </Tippy>
  );
}

export default Menu;

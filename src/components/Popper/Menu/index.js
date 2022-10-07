import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';

import styles from './Menu.module.scss';
import { useState } from 'react';
const cs = classNames.bind(styles);
const defaultFn = () => {}; //default funtion trống

function Menu({ children, items = [], onChange = defaultFn }) {
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

  return (
    <Tippy
      interactive
      // visible
      placement="bottom-end"
      render={(attrs) => (
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

            {renderItems()}
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

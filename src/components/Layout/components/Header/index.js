import images from '~/accsets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import {
  faSpinner,
  faMagnifyingGlass,
  faPlus,
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
} from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import Tippy from '@tippyjs/react/headless';
import Menu from '~/components/Popper/Menu';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { useEffect, useState } from 'react';
import AccountItem from 'components/AccountItem';

const cs = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback', //link nội bộ dùng "to"
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  return (
    <header className={cs('wrapper')}>
      <div className={cs('inner')}>
        <div className={cs('logo')}>
          <Button home to={'/'}>
            <img src={images.logo} alt="tiktok" />
          </Button>
        </div>

        <Tippy
          interactive={true}
          // visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cs('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cs('search-title')}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cs('search')}>
            {/*search */}
            <input placeholder="search accout and video" spellCheck={false} />
            <button className={cs('clear')}>
              {/*clear */}
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cs('spinner')} icon={faSpinner} />
            <button className={cs('search-btn')}>
              {/*icon search */}
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>

        <div classNames={cs('acctions')}>
          <Button rounded lelfIcon={<FontAwesomeIcon icon={faPlus} />} to="/upload">
            Upload
          </Button>
          <Button primary outline to="/login">
            Login
          </Button>

          <Menu items={MENU_ITEMS}>
            <button className={cs('more-btn')}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;

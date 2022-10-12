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
  faUser,
  faCoins,
  faGears,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import Menu from '~/components/Popper/Menu';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
// import { useEffect, useState } from 'react';
import AccountItem from 'components/AccountItem';
import 'tippy.js/dist/tippy.css';
import { MessageIcon, UploadIcon } from 'components/Icon/Icons';
// import { title } from 'process';
// import MenuItem from 'components/Popper/Menu/MenuItem';

const cs = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'Language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'Language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
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
  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '/@hoaa',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coins',
      to: '/coin',
    },
    {
      icon: <FontAwesomeIcon icon={faGears} />,
      title: 'Settings',
      to: '/settings',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log out',
      to: '/logout',
      separate: true,
    },
  ];
  // const [searchResult, setSearchResult] = useState([]);

  // useEffect(() => {
  //   // hover vô thì dừng khoảng '0' giây xog trả về mảng "[]"
  //   setTimeout(() => {
  //     setSearchResult([]);
  //   }, 0);
  // }, []);

  //handle logic in this
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'Language':
        //handle change language
        break;
      default:
    }
  };

  const currentUser = true;

  return (
    <header className={cs('wrapper')}>
      <div className={cs('inner')}>
        <div className={cs('logo')}>
          <Button home to={'/'}>
            <img src={images.logo} alt="tiktok" />
          </Button>
        </div>

        <HeadlessTippy
          interactive
          delay={[0, 700]}
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
        </HeadlessTippy>

        {/* phần actions icon */}
        <div className={cs('acctions-right')}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 50]} content="upload">
                <button className={cs('action-btn')}>
                  <UploadIcon />
                </button>
              </Tippy>

              <Tippy delay={[0, 50]} content="Message">
                <button className={cs('action-btn')}>
                  <MessageIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button rounded lelfIcon={<FontAwesomeIcon icon={faPlus} />} to="/upload">
                Upload
              </Button>
              <Button primary outline to="/login">
                Login
              </Button>
            </>
          )}
          {/* phần menu avatar action */}
          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <img
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a724dd059cac9304493b01c82c51b4f1~c5_100x100.jpeg?x-expires=1665540000&x-signature=WlyoDOmLwGjvXpw8o2K0dDxgsJY%3D"
                className={cs('user-avatar')}
                alt="Nguyen Van A"
              />
            ) : (
              <button className={cs('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;

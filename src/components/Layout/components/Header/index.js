import images from '~/accsets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
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

import Button from '~/components/Button';
import Tippy from '@tippyjs/react';
import Menu from '~/components/Popper/Menu';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import 'tippy.js/dist/tippy.css';
import { InboxIcon, MessageIcon, UploadIcon } from 'components/Icon/Icons';
import Image from 'components/Image';
import Search from '../Search';
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

  const currentUser = true;
  //searchResult

  //handle logic in this
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'Language':
        //handle change language
        break;
      default:
    }
  };

  return (
    <header className={cs('wrapper')}>
      <div className={cs('inner')}>
        <div className={cs('logo')}>
          <Button home to={'/'}>
            <img src={images.logo} alt="tiktok" />
          </Button>
        </div>

        {/* phần search */}
        <Search />
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

              <Tippy delay={[0, 50]} content="mailbox">
                <button className={cs('action-btn')}>
                  <InboxIcon />
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
              <Image
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a724dd059cac9304493b01c82c51b4f1~c5_100x100.jpeg?x-expires=1665540000&x-signature=WlyoDOmLwGjvXpw8o2K0dDxgsJY%3D"
                className={cs('user-avatar')}
                alt="Nguyen Van A"
                fallback="link ảnh thay thế "
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

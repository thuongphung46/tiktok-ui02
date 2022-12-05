import images from '~/accsets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'tippy.js/dist/tippy.css'
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
import AuthModal from '../../../../features/auth/Modal'
import Tippy from '@tippyjs/react';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from 'components/Icon/Icons';
import Image from 'components/Image';
import Search from '../Search';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Button from '~/components/Button';
import { AuthUserContext } from '../../../../App'
import { createContext } from 'react';
import config from '../../../../config';
import EmailAndPasswordLoginForm from '../../../../features/auth/partials/EmailAndPasswordLoginForm';
import Register from '../../../../features/auth/partials/register'


import Login from 'features/auth/partials/Login';
import { useContext, useEffect, useState } from 'react';
const cs = classNames.bind(styles);

export const ModalBodyNameContext = createContext();

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

  const currentUser = useContext(AuthUserContext)//thừa hưởng từ state con Login
  // const currentUser = true;//thừa hưởng từ state con Login

  //menu phầm acction
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
      setCurrentUser:false,
      to: "/logout",
      separate: true,
      
    },
  ];
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [children, setChildren] = useState(<Login />)
  const [navigateBack, setNavigateBack] = useState(null)
  const [modalBodyName, setModalBodyName] = useState('login')
  //searchResult


  //handle logic in this
  const handleMenuChange = (menuItem) => {
    switch (menuItem.language) {
      case 'Language':
        //handle change language
        break;
      default:break
    }

  switch (menuItem.to) {
    case '/logout':
      localStorage.removeItem('user')
      window.location.reload()
      break
    case '/@profile':
      window.location.href = `/@${currentUser.data.nickname}`
      break
    default:
      break
  }
}

const handleModalBodyName = (value) => {
  setModalBodyName(value ?? 'login')
}

const value = {
  modalBodyName,
  navigateBack,
  handleModalBodyName,
}

useEffect(() => {
  switch (modalBodyName) {
    case 'login':
      setChildren(<Login />)
      setNavigateBack(null)
      break
    case 'signup':
      setChildren(<Register />)
      setNavigateBack(null)
      break
    case 'login-with-phone':
      // setChildren(<PhoneAndCodeLoginForm />)
      setNavigateBack('login-with-email')
      break
    case 'login-with-phone-and-password':
      // setChildren(<PhoneAndPasswordLoginForm />)
      setNavigateBack('login-with-phone')
      break
    case 'login-with-email':
      setChildren(<EmailAndPasswordLoginForm />)
      setNavigateBack('login')
      break
    case 'reset-password-with-phone':
      // setChildren(<ResetPasswordWithPhone />)
      setNavigateBack('login-with-phone-and-password')
      break
    case 'reset-password-with-email':
      // setChildren(<ResetPasswordWithEmail />)
      setNavigateBack('reset-password-with-phone')
      break
    default:
      setChildren(<Login />)
      break
  }
}, [modalBodyName])



  return (
    <header className={cs('wrapper')}>
      <div className={cs('inner')}>
        <div className={cs('logo')}>
          <Link to={config.routes.home}>
            <img src={images.logo} alt="tiktok" />
          </Link>
          {/* <Button home to={'/'}>
          </Button> */}
        </div>

        {/* phần search */}
        <Search />
        {/* phần actions icon */}
        <div className={cs('acctions-right')}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 50]} content="upload">
                <Link to={'/upload'}>
                  <button className={cs('action-btn')}>
                    <UploadIcon />
                  </button>
                </Link>
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
              <Button rounded lelfIcon={<FontAwesomeIcon icon={faPlus} />}>
                Upload
              </Button>
              <Button primary outline to="/"
                onClick={(e) => {
                  e.preventDefault()
                  setShowAuthModal(true)
                }} >
                Login
              </Button>
            </>
          )}
          {/* menu login */}
          <ModalBodyNameContext.Provider value={value}>
            {showAuthModal && (
              <AuthModal
                children={children}
                onClose={() => {
                  setShowAuthModal(false)
                  setModalBodyName('')
                }}
              />
            )}
          </ModalBodyNameContext.Provider>

          {/* phần menu avatar action */}
          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                  src={currentUser.data.avatar}
                  alt={currentUser.data.nickname}
                  className={cs('user-avatar')}
                  fallback={images.noImage} //link ảnh thay thế trong th bị lỗi
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

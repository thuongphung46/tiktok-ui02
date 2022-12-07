
// import styles from './Slidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import { HomeIcon, HomeActiveIcon, UserGroupIcon, UserGroupActiveIcon, LiveIcon, LiveActiveIcon } from '../../../Icon';
// import SuggestedAccounts from '~/componnts/SuggestedAccounts';e
import config from '~/config';
import * as userService from '../../../../services/userService'
import SidebarAccountSpinner from './SidebarAccountSpinner'
import { AuthUserContext } from '~/App'
import { lazy, Suspense, useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './SlideBar.module.scss';

// const SidebarAccounts = lazy(() => import('~/components/SidebarAccounts'))
const SidebarAccounts = lazy(() => import('../../../SidebarAccounts'))
const cx = classNames.bind(styles);
const INIT_PAGE = 1
const PER_PAGE = 5
function Sidebar() {
  const [sPerPage, setSPerPage] = useState(PER_PAGE)
  const [sUsers, setSUsers] = useState([])
  const [fPerPage, setFPerPage] = useState(INIT_PAGE)
  const [fUsers, setFUser] = useState([])
  const authUser = useContext(AuthUserContext)
  const accessToken = authUser && authUser.meta.token ? authUser.meta.token : ''

  // Get suggested users
  useEffect(() => {
    userService
      .getSuggestedUsers({ page: 1, perPage: sPerPage, accessToken: accessToken })
      .then((data) => {
        if (Array.isArray(data)) {
          setSUsers(data)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }, [accessToken, sPerPage])

  // Get following users
  useEffect(() => {
    if (accessToken) {
      userService
        .getFollowingUsers({ page: fPerPage, accessToken: accessToken })
        .then((data) => {
          if (Array.isArray(data)) {
            if (fPerPage === INIT_PAGE) {
              setFUser(data)
            } else {
              setFUser((prev) => [...prev, ...data])
            }
          }
        })
        .catch((error) => {
          console.log(error)
        })
    } else {
      setFUser([])
    }
  }, [accessToken, fPerPage])

  function moreSUsers() {
    if (sUsers.length === PER_PAGE) {
      // Get 20 users
      setSPerPage(PER_PAGE * 4)
    } else {
      setSPerPage(PER_PAGE)
    }
  }

  function moreFUsers() {
    // Stop call API if last page has < PER_PAGE users (no more users)
    // Or has reached 6th page
    if (fUsers.length === PER_PAGE * 6 || fUsers.length < fPerPage * PER_PAGE) {
      setFPerPage(INIT_PAGE)
    } else {
      setFPerPage((prevPage) => prevPage + 1)
    }
  }
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupActiveIcon />}
        />
        <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
      </Menu>
      <Suspense fallback={<SidebarAccountSpinner label="Suggested accounts" />}>
        <SidebarAccounts
          label="Suggested accounts"
          moreLabel={sUsers.length === PER_PAGE ? 'See all' : 'See less'}
          data={sUsers}
          moreFunc={moreSUsers}
        />
        <SidebarAccounts
          label="Following accounts"
          moreLabel={fUsers.length === PER_PAGE * 6 || fUsers.length < PER_PAGE * fPerPage ? 'See less' : 'See more'}
          data={fUsers}
          moreFunc={moreFUsers}
        />
      </Suspense>
    </aside>
  );
}

export default Sidebar;

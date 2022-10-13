import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from 'components/Image';

const cs = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cs('wrapper')}>
      <Image
        className={cs('avatar')}
        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1597998077720578.jpeg?x-expires=1665561600&x-signature=DjnAjlFkXF%2B%2B0m8qXMF0vARZgcE%3D"
        alt="Hoa"
      />
      <div className={cs('info')}>
        <p className={cs('name')}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cs('check')} icon={faCheckCircle} />
        </p>
        <span className={cs('username')}>nguyen van a</span>
      </div>
    </div>
  );
}

export default AccountItem;

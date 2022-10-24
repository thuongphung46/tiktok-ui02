import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from 'components/Image';
import PropTypes from 'prop-types'; //impt

const cs = classNames.bind(styles);

function AccountItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cs('wrapper')}>
      <Image className={cs('avatar')} src={data.avatar} alt={data.full_name} />
      <div className={cs('info')}>
        <p className={cs('name')}>
          <span>{data.full_name}</span>
          {data.tick && <FontAwesomeIcon className={cs('check')} icon={faCheckCircle} />}
        </p>
        <span className={cs('username')}>{data.nickname}</span>
      </div>
    </Link>
  );
}
AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AccountItem;

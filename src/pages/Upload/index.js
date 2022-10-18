import styles from './upload.module.scss';
import classNames from 'classnames/bind';
const cs = classNames.bind(styles);

function Upload() {
  return (
    <div className={cs('wrapper-loading')}>
      <div className={cs('inner-loading')}>
        <div className={cs('content')}>
          <span className={cs('css')}>Tải video lên</span>
          <span className={cs('css')}>Đăng video vào tài khoản của bạn</span>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Upload;

import classNames from "classnames/bind";
import styles from './Popper.module.scss';

const cs = classNames.bind(styles);
function Wrapper({children}) {
    return <div className={cs('wrapper-Popper')}>{children}</div>
}

export default Wrapper;
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';


const cs = classNames.bind(styles);


function AccountItem() {
    return (  
        <div className={cs('wrapper')}>
            <img className={cs('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/610a617f023c09d8d84f8c55fcd9b11a~c5_100x100.jpeg?x-expires=1664694000&x-signature=6d%2BHqJ5ZkN4jJRe5V%2Fwu7NV0BKA%3D" alt="Hoa" />
            <div className={cs('info')} >
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
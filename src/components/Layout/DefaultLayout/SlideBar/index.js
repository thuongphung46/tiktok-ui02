import styles from './SlideBar.module.scss';
import classname from 'classnames/bind';

const cs = classname.bind(styles);

function Slidebar() {
    return (
        <div className={cs('wrapper')}>
            <h1>SlideBar</h1>
        </div>
        ) 
}
    

export default Slidebar;
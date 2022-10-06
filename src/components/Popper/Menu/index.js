import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import MenuItem from "./MenuItem";
import {Wrapper as PopperWrapper} from '~/components/Popper';
import styles from './Menu.module.scss';
import Header from "components/Layout/components/Header";
const cs = classNames.bind(styles);
function Menu({children, items = [] }) {
    /*const renderItems = () => {
        return items.map((item, index) => (
            <MenuItem key={index} data={item}/>
        ));
    }*/
    
    return (  
        <Tippy
            interactive
            placement="bottom-end"
                render={attrs=>(
                        <div className={cs('menu-list')} tabIndex="-1" {...attrs}>
                            <PopperWrapper className={cs('menu-popper')}>

                            <Header title="language"/>
                           {/*{renderItems()} */} 
                            </PopperWrapper>
                        </div>
                )}
                >
                {children}
                </Tippy>
    );
}

export default Menu;
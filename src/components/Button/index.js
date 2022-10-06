import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from './Button.module.scss';
const cs = classNames.bind(styles);


function Button({to,
    href,
    outline=false,
    primary= false,
    rounded=false,
    small=false,
    large= false,
    home = false,
    text=false,
    disabled=false,
    lelfIcon,
    rightIcon,
    onClick,
    children,
    className, 
    onclick,
    ...passProps}) {
    let Comp = 'button';
    const props={
        onClick,
        ...passProps,
    };
    if(disabled){//lặp check chả về một "on" nào đó 
        Object.keys(props).forEach((key)=>{
            if (key.startsWith('on')&& (typeof props[key]==='function')){//remove 
                delete props[key];
            }
        })
        //delete props.onClick;
    }
    if(to){
        props.to=to
        Comp = Link
    } else if (href){
        props.href=href
        Comp='a'
    }

    const classes = cs('wrapper', {
        primary,//css cho nút home 
        outline,
        small,//cỡ nhỏ 
        large,//css border cỡ lớn 
        text,//css cho text 
        rounded,
        lelfIcon,
        rightIcon,
        home,
        className:[className],//css riêng cho nút bấm
        disabled,//ko cho click 
    });
    return (
        <Comp className={classes} {...props}>
            {lelfIcon && <span className={cs('icon')}>{lelfIcon}</span>}
            <span className={cs('title')}>{children}</span>
            {rightIcon && <span className={cs('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
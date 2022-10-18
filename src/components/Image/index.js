import { forwardRef, useState } from 'react';
import images from 'accsets/images';
// import styles from './Image.module.scss';
// import classNames from 'classnames/bind';

// const cs = classNames.bind(styles);
const Image = forwardRef(({ src, alt, fallback: custtomFallback = images.noImage, ...props }, ref) => {
  const [fallBackInner, setFallback] = useState('');

  const handleError = () => {
    setFallback(custtomFallback);
  };
  // eslint-disable-next-line jsx-a11y/alt-text
  return <img ref={ref} src={fallBackInner || src} alt={alt} {...props} onError={handleError} />;
});

export default Image;

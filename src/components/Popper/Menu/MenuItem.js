import Button from 'components/Button';

// import styles from './Menu.module.scss';
// import className from 'classnames/bind';
// const cs = className.bind(styles);

function MenuItem({ data, onClick }) {
  return (
    <>
      {data.separate ? (
        <>
          <Button separate lelfIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
          </Button>
        </>
      ) : (
        <>
          <Button fixWidth lelfIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
          </Button>
        </>
      )}
    </>
  );
}

export default MenuItem;

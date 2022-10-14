import { Wrapper as PopperWrapper } from '~/components/Popper';
import HeadlessTippy from '@tippyjs/react/headless';
import AccountItem from 'components/AccountItem';
import { faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState, useRef } from 'react';

import styles from './Search.module.scss';
import classNames from 'classnames/bind';

const cs = classNames.bind(styles);
function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]); //kết quả tìm kiếm
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef('');

  useEffect(() => {
    // hover vô thì dừng khoảng '0' giây xog callback trả về mảng "[]"
    if (!searchValue.trim()) {
      // searchResult([]);
      return;
    }
    setLoading(true);
    fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${searchValue}&type=less`)
      .then((res) => res.json())
      .then((res) => {
        setSearchResult(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [searchValue]);
  // eslint-disable-next-line no-template-curly-in-string

  const handleClear = () => {
    //click vô x và forcus ra ngoài
    setSearchValue(''); //click x thì xóa giá trị tìm kiếm
    setSearchResult([]); //click ra thì xóa thanh tippy tìm kiếm
    inputRef.current.focus(); //click ra ngoài thì mất tippy focuss lại thì lại hiện
  };
  const handleHideResult = () => {
    setShowResult(false);
  };
  return (
    <HeadlessTippy
      interactive
      delay={[0, 700]}
      placement="bottom-end" //cố định tipp
      // visible
      visible={showResult && searchResult.length > 0}
      render={(attrs) => (
        <div className={cs('search-result')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cs('search-title')}>Accounts</h4>
            {searchResult.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cs('search')}>
        {/*search */}
        <input
          ref={inputRef}
          value={searchValue}
          placeholder="search accounts and videos"
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowResult(true)}
        />
        {!!searchValue &&
          !loading && ( //khi có searchValue thì mới có icon
            <button
              className={cs('clear')}
              onClick={() => {
                handleClear();
              }}
            >
              {/*clear */}
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}

        {loading && <FontAwesomeIcon className={cs('spinner')} icon={faSpinner} />}
        <button className={cs('search-btn')}>
          {/*icon search */}
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;

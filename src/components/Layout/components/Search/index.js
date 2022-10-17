import { Wrapper as PopperWrapper } from '~/components/Popper';
import HeadlessTippy from '@tippyjs/react/headless';
import AccountItem from 'components/AccountItem';
import { faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState, useRef } from 'react';
import useDebounce from '../../../../Hooks//useDebounce';
// import searchServices from '../../../../services/searchService';
import * as searchServices from '~/services/searchService';
// import { useDebounce } from 'Hooks';

import styles from './Search.module.scss';
import classNames from 'classnames/bind';

const cs = classNames.bind(styles);
function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]); //kết quả tìm kiếm
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const debouncedValue = useDebounce(searchValue, 500);

  const inputRef = useRef('');

  // useEffect(() => {
  //   // hover vô thì dừng khoảng '0' giây xog callback trả về mảng "[]"
  //   if (!debounced.trim()) {
  //     // searchResult([]);
  //     return;
  //   }
  //   setLoading(true);
  //   //XMLHTTPRequest
  //   //Fetch

  //   // full_name -> fullname
  //   axios
  //     .get(`https://tiktok.fullstack.edu.vn/api/users/search`, {
  //       params: {
  //         q: debounced,
  //         type: 'less',
  //       },
  //     })
  //     .then((res) => {
  //       setSearchResult(res.data.data);
  //       setLoading(false);
  //     })
  //     .catch(() => {
  //       setLoading(false);
  //     });
  // }, [debounced]);
  useEffect(() => {
    if (!debouncedValue.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);

      const result = await searchServices.search(debouncedValue);

      setSearchResult(result);
      setLoading(false);
    };

    fetchApi();
  }, [debouncedValue]);
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

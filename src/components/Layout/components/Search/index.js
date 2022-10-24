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
  const handleChange = (e) => {
    // ko cho phép nhập ký tự đầu tiên là space
    const searchValue = e.target.value;
    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue);
    }
  };

  return (
    //Interactive tippy element may not be accessible via keyboard navigation because it is not directly after the reference element in the DOM source order.
    //Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context.
    //Specifying `appendTo: document.body` silences this warning, but it assumes you are using a focus management solution to handle keyboard navigation.
    <div>
      <HeadlessTippy
        interactive
        delay={[0, 700]}
        placement="bottom-end" //cố định tippy
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className={cs('search-result')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <div className={cs('search-body')}>
                <h4 className={cs('search-title')}>Accounts</h4>
                {searchResult.map((result) => (
                  <AccountItem key={result.id} data={result} />
                ))}
              </div>
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
            // onChange={(e) => setSearchValue(e.target.value)}
            onChange={handleChange}
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
          <button className={cs('search-btn')} onMouseDown={(e) => e.preventDefault()}>
            {/*icon search */}
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;

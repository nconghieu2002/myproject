import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from 'components/Popper';
import ListShoes from 'components/ListShoes';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(false);

    const navigate = useNavigate();

    const inputRef = useRef();

    useEffect(() => {
        fetch('https://634ea79bf34e1ed82692804e.mockapi.io/api/v1/products')
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res);
            });
    }, []);

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;

        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    const handleProductClick = (id) => {
        setShowResult(false);
        console.log(id);
        // window.location.href = `/detail?id=${id}`;
        // navigate(`/detail?id=${id}`);
    };

    const searchFilter = searchResult.filter((value) => value.name.toLowerCase().includes(searchValue.toLowerCase()));

    return (
        <Tippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {searchFilter.map((result) => (
                            <ListShoes key={result.id} data={result} onClick={() => handleProductClick(result.id)} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div>
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        type="text"
                        placeholder="Tìm kiếm..."
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && (
                        <button
                            className={cx('clear')}
                            onClick={() => {
                                setSearchValue('');
                                inputRef.current.focus();
                            }}
                        >
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    )}

                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </div>
        </Tippy>
    );
}

export default Search;

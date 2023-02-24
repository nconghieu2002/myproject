import classNames from 'classnames/bind';
import styles from './ButtonIcon.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import { useState, useRef, useEffect } from 'react';
import { useContext } from 'react';

import MenuUser from '../Popper/Menu/MenuUser';
import MenuWish from '../Popper/Menu/MenuWish';
import MenuBag from '../Popper/Menu/MenuBag';
import { Context } from 'Context';

const cx = classNames.bind(styles);

function ButtonIcon() {
    const {count} = useContext(Context)

    const [isActive, setIsActive] = useState(false);

    const ref = useRef(null);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    });

    const handleClick = (value) => {
        setIsActive(value);
        if (value === isActive) {
            setIsActive(false);
        }
    };

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsActive(false);
        }
    };

    return (
        <div ref={ref} className={cx('actions')}>
            <div className={cx('user', 'user-icon', isActive === 1 ? cx('active-user') : '')}>
                <MenuUser>
                    <button
                        className={cx('user-btn')}
                        onClick={() => {
                            handleClick(1);
                        }}
                    >
                        <FontAwesomeIcon icon={faUser} />
                    </button>
                </MenuUser>
                <span className={cx('text')}>Info</span>
            </div>
            <div className={cx('user', 'wish-icon', isActive === 2 ? cx('active-wish') : '')}>
                <MenuWish>
                    <button
                        className={cx('wish-btn')}
                        onClick={() => {
                            handleClick(2);
                        }}
                    >
                        <FontAwesomeIcon icon={faHeart} />
                    </button>
                </MenuWish>
                <span className={cx('text')}>Favourites</span>
                <span className={cx('count-wish')}>0</span>
            </div>
            <div className={cx('user', 'bag-icon', isActive === 3 ? cx('active-bag') : '')}>
                <MenuBag>
                    <button
                        className={cx('bag-btn')}
                        onClick={() => {
                            handleClick(3);
                        }}
                    >
                        <FontAwesomeIcon icon={faBagShopping} />
                    </button>
                </MenuBag>
                <span className={cx('text')}>Bag</span>
                <span className={cx('count')}>{count}</span>
            </div>
        </div>
    );
}

export default ButtonIcon;

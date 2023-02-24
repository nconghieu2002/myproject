import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useContext } from 'react';

import { Wrapper as PopperWrapper } from '../../Popper';
import Button from '../../Button';
import { Context } from 'Context';

const cx = classNames.bind(styles);

function MenuBag({ children }) {
    const { count, cartItems, removeItem } = useContext(Context);

    return (
        <Tippy
            interactive={true}
            // visible
            trigger="click"
            render={(attrs) => (
                <div className={cx('menu-items', 'menu-items-bag')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <div className={cx('wrapper-bag')}>
                            <div className={cx('bag-header')}>
                                <div className={cx('bag-header-check')}>
                                    <FontAwesomeIcon className={cx('check-color')} icon={faCheck} />
                                    <p className={cx('header-check-text')}>Đã thêm vào túi</p>
                                </div>
                                <button className={cx('clear')}>
                                    <FontAwesomeIcon icon={faXmark} />
                                </button>
                            </div>
                            <div className={cx('wrapper-scrool')}>
                                {cartItems.map((data) => (
                                    <div key={data.id} className={cx('container')}>
                                        <img className={cx('image-shoes')} src={data.banner} />
                                        <div className={cx('quantity')}>{data.quantity}</div>
                                        <div className={cx('container-content')}>
                                            <div className={cx('content-title')}>{data.name}</div>
                                            <div className={cx('content-sex')}>Giày Nam</div>
                                            <div className={cx('content-size')}>Size 40</div>
                                            {/* <div className={cx('wrapper-price')}>
                                                <div className={cx('price')}>${data.price}</div>
                                                <div className={cx('sale')}>${data.sale}</div>
                                            </div> */}
                                            {(!data.sale && <div>${data.price}</div>) ||
                                                (data.sale && (
                                                    <div className={cx('wrapper-price')}>
                                                        <div className={cx('price')}>${data.price}</div>
                                                        <div className={cx('sale')}>${data.sale}</div>
                                                    </div>
                                                ))}
                                        </div>
                                        <button onClick={() => removeItem(data.id)} className={cx('clear-item')}>
                                            <FontAwesomeIcon icon={faXmark} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <div className={cx('bag-btn')}>
                                <Button to="#" primary>
                                    View Bag ({count})
                                </Button>
                                <Button>Checkout</Button>
                            </div>
                        </div>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default MenuBag;

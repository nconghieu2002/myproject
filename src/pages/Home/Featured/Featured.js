import classNames from 'classnames/bind';
import styles from './Featured.module.scss';
import { useRef } from 'react';
import { useContext } from 'react';

import image1 from 'assets/images/featured1.png';
import image2 from 'assets/images/featured2.png';
import image3 from 'assets/images/featured3.png';
import image4 from 'assets/images/featured4.png';
import image5 from 'assets/images/featured5.png';
import image6 from 'assets/images/featured6.png';

import Button from 'components/Button';

const cx = classNames.bind(styles);

function Featured() {
    const ref = useRef();

    const slideLeft = () => {
        ref.current.scrollLeft -= 460;
    };

    const slideRight = () => {
        ref.current.scrollLeft += 460;
    };

    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('heading')}>Sản phẩm nổi bật</h2>
            <div className={cx('wrapper-form')}>
                <div className={cx('form')} ref={ref}>
                    <div className={cx('container')}>
                        <div className={cx('card')}>
                            <p className={cx('mark')}>ADIDAS</p>
                            <img src={image1} alt="" className={cx('img')} />
                            <div className={cx('data')}>
                                <h3 className={cx('title')}>Adidas 4DFWD 2</h3>
                                <span className={cx('price')}>$199</span>
                                <p className={cx('description')}>Giày chạy bộ 4DFWD 2</p>
                                <div className={cx('btn')}>
                                    <Button>Buy</Button>
                                </div>
                            </div>
                        </div>
                        <div className={cx('card')}>
                            <p className={cx('mark')}>ADIDAS</p>
                            <img src={image2} alt="" className={cx('img')} />
                            <div className={cx('data')}>
                                <h3 className={cx('title')}>Ultraboost 1.0</h3>
                                <span className={cx('price')}>$110</span>
                                <p className={cx('description')}>Giày Ultraboost 1.0</p>
                                <div className={cx('btn')}>
                                    <Button>Buy</Button>
                                </div>
                            </div>
                        </div>
                        <div className={cx('card')}>
                            <p className={cx('mark')}>ADIDAS</p>
                            <img src={image3} alt="" className={cx('img')} />
                            <div className={cx('data')}>
                                <h3 className={cx('title')}>Ultraboost 22</h3>
                                <span className={cx('price')}>$105</span>
                                <p className={cx('description')}>Giày chạy bộ ULTRABOOST</p>
                                <div className={cx('btn')}>
                                    <Button>Buy</Button>
                                </div>
                            </div>
                        </div>
                        <div className={cx('card')}>
                            <p className={cx('mark')}>ADIDAS</p>
                            <img src={image4} alt="" className={cx('img')} />
                            <div className={cx('data')}>
                                <h3 className={cx('title')}>Y-3 IDOSO BOOST</h3>
                                <span className={cx('price')}>$399</span>
                                <p className={cx('description')}>Giày Y-3 IDOSO BOOST</p>
                                <div className={cx('btn')}>
                                    <Button>Buy</Button>
                                </div>
                            </div>
                        </div>
                        <div className={cx('card')}>
                            <p className={cx('mark')}>ADIDAS</p>
                            <img src={image5} alt="" className={cx('img')} />
                            <div className={cx('data')}>
                                <h3 className={cx('title')}>NMD_R1</h3>
                                <span className={cx('price')}>$105</span>
                                <p className={cx('description')}>Giày thể thao NMD_R1</p>
                                <div className={cx('btn')}>
                                    <Button>Buy</Button>
                                </div>
                            </div>
                        </div>
                        <div className={cx('card')}>
                            <p className={cx('mark')}>ADIDAS</p>
                            <img src={image6} alt="" className={cx('img')} />
                            <div className={cx('data')}>
                                <h3 className={cx('title')}>ADISTAR 1 REFUEL</h3>
                                <span className={cx('price')}>$70</span>
                                <p className={cx('description')}>Giày ADISTAR 1 REFUEL</p>
                                <div className={cx('btn')}>
                                    <Button>Buy</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className={cx('scroll-left-2')} onClick={slideLeft}>
                    &lsaquo;
                </button>
                <button className={cx('scroll-right-2')} onClick={slideRight}>
                    &rsaquo;
                </button>
            </div>
        </div>
    );
}

export default Featured;

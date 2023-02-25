import classNames from 'classnames/bind';
import styles from './CardItem.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function CardItem({ to, img, name, price, sale, noSale, category }) {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    if (!sale) {
        noSale = true;
    }

    return (
        <div className={cx('wrapper')}>
            <Link onClick={scrollToTop} to={to} className={cx('link-detail')}>
                <img className={cx('img')} src={img} alt="" />
            </Link>
            <div className={cx('data')}>
                <Link onClick={scrollToTop} to={to} className={cx('name')}>
                    {name}
                </Link>
                {category && <div className={cx('category')}>{category}</div>}
                {price &&
                    ((noSale && <div className={cx('price')}>${price}</div>) ||
                        (sale && (
                            <div className={cx('wrapper-price')}>
                                <div className={cx('price')}>${price}</div>
                                <div className={cx('sale')}>${sale}</div>
                            </div>
                        )))}
                <Link onClick={scrollToTop} to={to}>
                    <button className={cx('btn')}>Xem</button>
                </Link>
            </div>
        </div>
    );
}

export default CardItem;

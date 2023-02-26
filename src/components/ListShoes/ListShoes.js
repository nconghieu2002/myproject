import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ListShoes.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ListShoes({ data, onClick }) {
    return (
        <div onClick={onClick} className={cx('wrapper')}>
            <Link to={`/detail?id=${data.id}`} className={cx('link-wrapper')}>
                <img className={cx('avatar')} src={data.banner} alt="" />
                <div className={cx('container-content')}>
                    <div className={cx('content-title')}>{data.name}</div>
                    <div className={cx('content-text')}>{data.sex}</div>
                    {data.price &&
                        ((!data.sale && <div className={cx('content-price')}>${data.price}</div>) ||
                            (data.sale && (
                                <div className={cx('wrapper-price')}>
                                    <div className={cx('content-price')}>${data.price}</div>
                                    <div className={cx('content-sale')}>${data.sale}</div>
                                </div>
                            )))}
                </div>
            </Link>
        </div>
    );
}

ListShoes.propTypes = {
    data: PropTypes.object,
};

export default ListShoes;

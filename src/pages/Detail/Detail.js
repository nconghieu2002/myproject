import classNames from 'classnames/bind';
import styles from './Detail.module.scss';
import { useContext, useEffect, useState } from 'react';
import { Context } from 'Context';

const cx = classNames.bind(styles);

function Detail() {
    const { addToCart, id } = useContext(Context);
    const [listProducts, setListProducts] = useState([]);
    const [nameProduct, setNameProduct] = useState([]);

    useEffect(() => {
        fetch(`https://634ea79bf34e1ed82692804e.mockapi.io/api/v1/products?id=` + id)
            .then((res) => res.json())
            .then((res) => {
                setListProducts(res[0].images);
                setNameProduct(res[0]);
            });
    }, [id]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('images')}>
                <img className={cx('img-item', 'img-banner')} src={listProducts[0]} alt="" />
                <img className={cx('img-item')} src={listProducts[1]} alt="" />
                <img className={cx('img-item')} src={listProducts[2]} alt="" />
                <img className={cx('img-item')} src={listProducts[3]} alt="" />
            </div>
            <div className={cx('container')}>
                <div className={cx('name')}>{nameProduct.name}</div>
                <div className={cx('category')}>{nameProduct.category}</div>
                {(!nameProduct.sale && <div>${nameProduct.price}</div>) ||
                    (nameProduct.sale && (
                        <div className={cx('wrapper-price')}>
                            <div className={cx('price')}>${nameProduct.price}</div>
                            <div className={cx('sale')}>${nameProduct.sale}</div>
                        </div>
                    ))}
                <div className={cx('size-title')}>Chọn size</div>
                <div className={cx('list-size')}>
                    <div className={cx('size-card')}>Size 36</div>
                    <div className={cx('size-card')}>Size 37</div>
                    <div className={cx('size-card')}>Size 38</div>
                    <div className={cx('size-card')}>Size 39</div>
                    <div className={cx('size-card')}>Size 40</div>
                    <div className={cx('size-card')}>Size 41</div>
                    <div className={cx('size-card')}>Size 42</div>
                </div>
                <button className={cx('add-btn-bag')} onClick={addToCart}>
                    Thêm vào túi
                </button>
                <button className={cx('add-btn-wish')}>Yêu thích</button>
                <div className={cx('description')}>Thông tin chi tiết</div>
                <div className={cx('description-content')}>{nameProduct.description}</div>
            </div>
        </div>
    );
}

export default Detail;

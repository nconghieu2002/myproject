import classNames from 'classnames/bind';
import styles from './Admin.module.scss';
import { useEffect, useState } from 'react';

import Button from 'components/Button';

const cx = classNames.bind(styles);

function Admin() {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [sale, setSale] = useState('');
    const [banner, setBanner] = useState('');
    const [images, setImages] = useState('');

    useEffect(() => {
        fetch('https://634ea79bf34e1ed82692804e.mockapi.io/api/v1/products')
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);

    const handleAddProduct = () => {
        const newProduct = {
            name,
            price,
            sale,
            banner,
            images,
        };

        fetch('https://634ea79bf34e1ed82692804e.mockapi.io/api/v1/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct),
        })
            .then((response) => response.json())
            .then((data) => setProducts([...products, data]));

        setName('');
        setPrice('');
        setSale('');
        setBanner('');
        setImages('');
    };

    const handleDeleteProduct = (id) => {
        fetch(`https://634ea79bf34e1ed82692804e.mockapi.io/api/v1/products/${id}`, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then(() => setProducts(products.filter((product) => product.id !== id)));
    };

    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>Quản lý sản phẩm</h2>
            <hr />
            <div className={cx('product')}>
                <h5>Thêm sản phẩm</h5>
                <form className={cx('add-product')} onSubmit={(event) => event.preventDefault()}>
                    <label className={cx('form')}>
                        Tên:
                        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
                    </label>
                    <label className={cx('form')}>
                        Giá:
                        <input type="number" value={price} onChange={(event) => setPrice(event.target.value)} />
                    </label>
                    <label className={cx('form')}>
                        Giá sale:
                        <input type="number" value={sale} onChange={(event) => setSale(event.target.value)} />
                    </label>
                    <label className={cx('form')}>
                        Ảnh đại diện:
                        <input type="text" value={banner} onChange={(event) => setBanner(event.target.value)} />
                    </label>
                    <label className={cx('form')}>
                        Tất cả ảnh:
                        <input type="text" value={images} onChange={(event) => setImages(event.target.value)} />
                    </label>
                    <Button onClick={handleAddProduct}>Thêm</Button>
                </form>
            </div>
            <hr />
            <div className={cx('container')}>
                <div className={cx('header')}>
                    <h5 className={cx('img')}>Ảnh</h5>
                    <h5 className={cx('name')}>Tên sản phẩm</h5>
                    <h5 className={cx('fix')}>Giá</h5>
                    <h5 className={cx('delete')}>Xóa</h5>
                </div>
                <hr />
                {products.map((data) => (
                    <div key={data.id} className={cx('content')}>
                        <img className={cx('img-detail')} src={data.banner} alt="" />
                        <div className={cx('name-detail')}>{data.name}</div>
                        <div className={cx('price-detail')}>${data.price}</div>
                        <button onClick={() => handleDeleteProduct(data.id)} className={cx('delete-detail')}>
                            Xóa
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Admin;

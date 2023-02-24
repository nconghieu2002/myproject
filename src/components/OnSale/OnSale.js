import classNames from 'classnames/bind';
import styles from './OnSale.module.scss';
import { useEffect, useState } from 'react';

import CardItem from 'components/CardItem';
import Button from 'components/Button';

const cx = classNames.bind(styles);

function OnSale() {
    const [listData, setListData] = useState([]);
    const [currentShow, setCurrentShow] = useState(true);

    useEffect(() => {
        fetch(`https://634ea79bf34e1ed82692804e.mockapi.io/api/v1/products`)
            .then((res) => res.json())
            .then((res) => {
                setListData(res);
            });
    }, []);

    const handleMore = () => {
        setCurrentShow(false);
    };

    const handleRemoveMore = () => {
        setCurrentShow(true);
    };

    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('heading')}>Chương trình giảm giá</h2>
            {currentShow ? (
                <div>
                    <div className={cx('form')}>
                        {listData
                            .filter((data) => data.sale)
                            .slice(0, 8)
                            .map((data) => (
                                <CardItem
                                    key={data.id}
                                    to={'/detail?id=' + data.id}
                                    img={data.banner}
                                    name={data.name}
                                    price={data.price}
                                    sale={data.sale}
                                />
                            ))}
                    </div>
                    <div className={cx('wrapper-btn')}>
                        <Button primary to="" onClick={handleMore}>
                            Xem Thêm
                        </Button>
                    </div>
                </div>
            ) : (
                <div>
                    <div className={cx('form')}>
                        {listData
                            .filter((data) => data.sale)
                            .map((data) => (
                                <CardItem
                                    key={data.id}
                                    to={'/detail?id=' + data.id}
                                    img={data.banner}
                                    name={data.name}
                                    price={data.price}
                                    sale={data.sale}
                                />
                            ))}
                    </div>
                    <div className={cx('wrapper-btn')}>
                        <Button primary to="/" onClick={handleRemoveMore}>
                            Thu gọn
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default OnSale;

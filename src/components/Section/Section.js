import classNames from 'classnames/bind';
import styles from './Section.module.scss';
import { useEffect, useState } from 'react';

import Button from 'components/Button';
import CardItem from 'components/CardItem';

const cx = classNames.bind(styles);

function Section() {
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

    useEffect(() => {
        fetch(`https://634ea79bf34e1ed82692804e.mockapi.io/api/v1/products`)
            .then((res) => res.json())
            .then((res) => {
                setListData(res);
            });
    }, []);

    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('heading')}>Bộ sưu tập</h2>
            {currentShow ? (
                <div>
                    <div className={cx('form')}>
                        {listData
                            .filter((data) => data)
                            .splice(0, 8)
                            .map((data) => (
                                <CardItem
                                    key={data.id}
                                    to={'/detail?id=' + data.id}
                                    img={data.banner}
                                    name={data.name}
                                    category={data.category}
                                />
                            ))}
                    </div>
                    <div className={cx('wrapper-btn')}>
                        <Button primary to="/" onClick={handleMore}>
                            Xem Tất Cả
                        </Button>
                    </div>
                </div>
            ) : (
                <div>
                    <div className={cx('form')}>
                        {listData
                            .filter((data) => data)
                            .map((data) => (
                                <CardItem
                                    key={data.id}
                                    to={'/detail?id=' + data.id}
                                    img={data.banner}
                                    name={data.name}
                                    category={data.category}
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

export default Section;

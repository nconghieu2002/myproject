import classNames from 'classnames/bind';
import styles from './SectionMen.module.scss';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import CardItem from 'components/CardItem';

const cx = classNames.bind(styles);

function SectionMen() {
    const [listData, setListData] = useState([]);

    useEffect(() => {
        fetch(`https://634ea79bf34e1ed82692804e.mockapi.io/api/v1/products`)
            .then((res) => res.json())
            .then((res) => {
                setListData(res);
            });
    }, []);

    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('heading')}>Giày Nam</h2>
            <div className={cx('form')}>
                {listData.splice(0, 12).map((data) => (
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
            <div className={cx('wrapper-bootstrap')}>
                <Pagination aria-label="Page navigation example" size="sm">
                    <PaginationItem>
                        <PaginationLink first href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" previous />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" next />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" last />
                    </PaginationItem>
                </Pagination>
            </div>
        </div>
    );
}

export default SectionMen;

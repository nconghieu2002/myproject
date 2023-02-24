import classNames from 'classnames/bind';
import styles from './Pagination.module.scss';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const cx = classNames.bind(styles);

function Pagination() {
    return (
        <div>
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
    );
}

export default Pagination;

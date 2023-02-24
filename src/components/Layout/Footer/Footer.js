import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('infor')}>
                    <p className={cx('title')}>THÔNG TIN</p>
                    <p>Về chúng tôi</p>
                    <p>Tuyển dụng</p>
                    <p>Hệ thống cửa hàng</p>
                    <p>Hình thức thanh toán</p>
                    <p>Chính sách đổi trả</p>
                </div>
                <div className={cx('address')}>
                    <p className={cx('title')}>CHI NHÁNH</p>
                    <p>Chi nhánh 1</p>
                    <p>Chi nhánh 2</p>
                    <p>Chi nhánh 3</p>
                </div>
                <div className={cx('contact')}>
                    <button className={cx('btn-icon', 'btn-face')}>
                        <FontAwesomeIcon icon={faFacebook} className={cx('face-icon')} />
                    </button>
                    <button className={cx('btn-icon')}>
                        <FontAwesomeIcon icon={faInstagram} className={cx('ins-icon')} />
                    </button>

                    <button className={cx('btn-icon', 'btn-twi')}>
                        <FontAwesomeIcon icon={faTwitter} className={cx('twi-icon')} />
                    </button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

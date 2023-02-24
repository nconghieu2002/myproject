import classNames from 'classnames/bind';
import styles from './ShoppingCart.module.scss';

import Banner from 'components/Banner';

const cx = classNames.bind(styles);

function ShoppingCart() {
    return (
        <div className={cx('wrapper')}>
            <Banner
                image="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enUS/Images/sp087_ss23_valentines-day-mh-lg-k-d_tcm221-981749.jpg"
                title="VỀ CHÚNG TÔI"
                text="Luôn mang đến cho mọi người những thứ tuyệt vời nhất."
                menBtn="GIÀY NAM"
                womenBtn="GIÀY NỮ"
            />
        </div>
    );
}

export default ShoppingCart;

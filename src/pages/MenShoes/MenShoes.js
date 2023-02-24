import classNames from 'classnames/bind';
import styles from './MenShoes.module.scss';

import Banner from 'components/Banner';
import SectionMen from 'components/SectionMen';

const cx = classNames.bind(styles);

function MenShoes() {
    return (
        <div className={cx('wrapper')}>
            <Banner
                primary
                image="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enUS/Images/ss23-originals-stan-smith-w-blueversion-dotcom-hp-mh-large-mens-v2-d_tcm221-982520.jpg"
                title="GIÀY NAM"
                text="Nhẹ nhàng nhưng đầy nam tính."
                homeBtn="TRANG CHỦ"
                womenBtn="GIÀY NỮ"
            />
            <SectionMen />
        </div>
    );
}

export default MenShoes;

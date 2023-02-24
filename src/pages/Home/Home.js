import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import Banner from 'components/Banner';
import Featured from 'pages/Home/Featured';
import Section from 'components/Section';
import OnSale from 'components/OnSale';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Banner
                image="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enUS/Images/hp-ss23-UBDNAALWAYSON-HR0063-mh-large-d_tcm221-977575.jpg"
                title="GIÀY CHÍNH HÃNG"
                text="Phong cách tươi mới, mang đến sự thoải mái."
                menBtn="GIÀY NAM"
                womenBtn="GIÀY NỮ"
            />
            <Featured />
            <OnSale />
            <Section />
        </div>
    );
}

export default Home;

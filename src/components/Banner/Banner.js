import classNames from 'classnames/bind';
import styles from './Banner.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/Button';

const cx = classNames.bind(styles);

function Banner({ image, title, text, homeBtn, menBtn, womenBtn, primary }) {
    const classes = cx('wrapper', {
        primary,
    });

    return (
        <div className={classes}>
            <img className={cx('image')} src={image} alt="" />
            <div className={cx('container')}>
                <h2 className={cx('title')}>{title}</h2>
                <p className={cx('text')}>{text}</p>
                {homeBtn && (
                    <Button to="/" rightIcon={<FontAwesomeIcon icon={faRightLong} />}>
                        {homeBtn}
                    </Button>
                )}
                <div className={cx('margin')}></div>
                {menBtn && (
                    <Button to="/men" rightIcon={<FontAwesomeIcon icon={faRightLong} />}>
                        {menBtn}
                    </Button>
                )}
                <div className={cx('margin')}></div>
                {womenBtn && (
                    <Button to="/women" rightIcon={<FontAwesomeIcon icon={faRightLong} />}>
                        {womenBtn}
                    </Button>
                )}
            </div>
        </div>
    );
}

export default Banner;

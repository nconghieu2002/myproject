import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

import config from 'config';
import logo from 'assets/images/logo.png';
import Search from '../Search';
import ButtonIcon from 'components/ButtonIcon';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <NavLink className={cx('big-logo')} to={config.routes.home}>
                    <img src={logo} className={cx('logo')} />
                </NavLink>
                <div className={cx('menu')}>
                    <NavLink className={(nav) => cx('menu-men', { active: nav.isActive })} to={config.routes.men}>
                        MEN
                    </NavLink>
                    <NavLink className={(nav) => cx('menu-women', { active: nav.isActive })} to={config.routes.women}>
                        WOMEN
                    </NavLink>
                    <NavLink className={(nav) => cx('menu-blog', { active: nav.isActive })} to={config.routes.blog}>
                        BLOG
                    </NavLink>
                </div>
                <Search />
                <ButtonIcon />
            </div>
        </header>
    );
}

export default Header;

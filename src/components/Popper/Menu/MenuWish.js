import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '../../Popper';

const cx = classNames.bind(styles);

function MenuWish({ children }) {
    return (
        <Tippy
            interactive={true}
            // visible
            trigger="click"
            render={(attrs) => (
                <div className={cx('menu-items', 'menu-items-wish')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h2>Menu Wish</h2>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default MenuWish;

import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from 'components/Popper';
import logo from 'assets/images/logo.png';
import config from 'config';
import { useEffect, useState } from 'react';
import { Context } from 'Context';

const cx = classNames.bind(styles);

function MenuUser({ children }) {
    const { userNameInput, setUserNameInput, passwordInput, setPasswordInput, admin, handleAccountAdmin } =
        useContext(Context);

    const [currentUser, setCurrentUser] = useState(false);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if (admin) {
            navigate(admin);
        }
    }, [admin]);

    const handleAccount = () => {
        if (userName.trim() != '' && password.trim() != '') {
            alert('Thanhcong');
        } else {
            alert('Nhaplai');
        }

        localStorage.setItem('userName', userName);
        localStorage.setItem('password', password);
        setUserName('');
        setPassword('');
    };

    return (
        <Tippy
            interactive={true}
            // visible
            trigger="click"
            placement="bottom"
            render={(attrs) => (
                <div className={cx('menu-items', 'menu-items-user')} tabIndex="-1" {...attrs}>
                    {currentUser ? (
                        <PopperWrapper>
                            <div className={cx('wrapper-user')}>
                                <Link className={cx('item-logo')} to={config.routes.home}>
                                    <img src={logo} className={cx('logo')} />
                                </Link>
                                <p className={cx('title')}>Đăng ký tài khoản</p>
                                <div className={cx('login')}>
                                    <div className={cx('account')}>
                                        <p className={cx('text')}>Tài khoản</p>
                                        <input
                                            value={userName}
                                            onChange={(e) => setUserName(e.target.value)}
                                            className={cx('input')}
                                            type="text"
                                            placeholder="Tên đăng nhập"
                                        />
                                    </div>
                                    <div className={cx('account')}>
                                        <p className={cx('text')}>Mật khẩu</p>
                                        <input
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className={cx('input')}
                                            type="password"
                                            placeholder="Mật khẩu"
                                        />
                                    </div>
                                    <button onClick={() => handleAccount()} className={cx('signin')}>
                                        Đăng ký
                                    </button>
                                    <div className={cx('signup')}>
                                        <p>Bạn đã có tài khoản?</p>
                                        <Link onClick={() => setCurrentUser(false)} className={cx('link')} to="">
                                            Đăng nhập
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </PopperWrapper>
                    ) : (
                        <PopperWrapper>
                            <div className={cx('wrapper-user')}>
                                <Link className={cx('item-logo')} to="/">
                                    <img src={logo} className={cx('logo')} />
                                </Link>
                                <p className={cx('title')}>Đăng nhập tài khoản</p>
                                <div className={cx('login')}>
                                    <div className={cx('account')}>
                                        <p className={cx('text')}>Tài khoản</p>
                                        <input
                                            value={userNameInput}
                                            onChange={(e) => setUserNameInput(e.target.value)}
                                            className={cx('input')}
                                            type="text"
                                            placeholder="Tên đăng nhập"
                                        />
                                    </div>
                                    <div className={cx('account')}>
                                        <p className={cx('text')}>Mật khẩu</p>
                                        <input
                                            value={passwordInput}
                                            onChange={(e) => setPasswordInput(e.target.value)}
                                            className={cx('input')}
                                            type="password"
                                            placeholder="Mật khẩu"
                                        />
                                    </div>
                                    <Link to={admin}>
                                        <button onClick={handleAccountAdmin} className={cx('signin')}>
                                            Đăng nhập
                                        </button>
                                    </Link>
                                    <div className={cx('signup')}>
                                        <p>Bạn chưa có tài khoản?</p>
                                        <Link onClick={() => setCurrentUser(true)} className={cx('link')} to="">
                                            Đăng ký
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </PopperWrapper>
                    )}
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default MenuUser;

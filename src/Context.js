import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    // const navigate = useNavigate();
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');

    const [count, setCount] = useState(0);
    const [listData, setListData] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    const [authenticated, setAuthenticated] = useState(false);
    const [userNameInput, setUserNameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [admin, setAdmin] = useState('');

    useEffect(() => {
        fetch(`https://634ea79bf34e1ed82692804e.mockapi.io/api/v1/products`)
            .then((res) => res.json())
            .then((res) => {
                setListData(res);
            });
    }, []);
    // Xác nhận tài khoản admin
    const userAdmin = 'admin';
    const passwordAdmin = 'admin';
    const handleAccountAdmin = () => {
        if (userNameInput.trim() === userAdmin && passwordInput.trim() === passwordAdmin) {
            setAuthenticated(true);
            if (authenticated) {
                setUserNameInput('');
                setPasswordInput('');
            }
            // setAdmin('/admin');
        } else {
            alert('Thông tin tài khoản hoặc mật khẩu không chính xác');
            setUserNameInput('');
            setPasswordInput(''); // bat giup component login
        }
    };

    // useEffect(() => {
    //     if (authenticated) {
    //         console.log(authenticated)
    //     }
    // }, [authenticated]);

    // Xóa sản phẩm khỏi giỏ hàng
    const removeItem = (id) => {
        const newCartItems = cartItems.filter((item) => item.id !== id);
        setCartItems(newCartItems);

        const newTotalQuantity = newCartItems.reduce((total, item) => {
            return total + item.quantity;
        }, 0);

        setCount(newTotalQuantity);
    };

    // Thêm sản phẩm vòa giỏ hàng
    const addToCart = () => {
        const product = listData.find((item) => item.id == id);
        // Lấy thông tin sản phẩm được chọn
        const item = {
            id: product.id,
            name: product.name,
            price: product.price,
            sale: product.sale,
            banner: product.banner,
            quantity: 1,
        };

        // Kiểm tra sản phẩm đã tồn tại trong giỏ hàng hay chưa
        const existingItem = cartItems.find((i) => i.id === item.id);

        if (existingItem) {
            // Nếu sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng lên 1
            setCartItems(cartItems.map((i) => (i.id === existingItem.id ? { ...i, quantity: i.quantity + 1 } : i)));
        } else {
            // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm vào giỏ hàng
            setCartItems([...cartItems, item]);
        }

        // Tính tổng số lượng sản phẩm trong giỏ hàng
        const totalQuantity = cartItems.reduce((total, item) => {
            return total + item.quantity;
        }, 1);

        // Cập nhật giá trị của count
        setCount(totalQuantity);
    };

    return (
        <Context.Provider
            value={{
                count,
                listData,
                cartItems,
                addToCart,
                removeItem,
                id,
                authenticated,
                userNameInput,
                setUserNameInput,
                passwordInput,
                setPasswordInput,
                admin,
                handleAccountAdmin,
            }}
        >
            {children}
        </Context.Provider>
    );
};

import { createContext, useState, useEffect } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');

    const [count, setCount] = useState(0);
    const [listData, setListData] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetch(`https://634ea79bf34e1ed82692804e.mockapi.io/api/v1/products`)
            .then((res) => res.json())
            .then((res) => {
                setListData(res);
            });
    }, []);

    const removeItem = (id) => {
        const newCartItems = cartItems.filter((item) => item.id !== id);
        setCartItems(newCartItems);

        const newTotalQuantity = newCartItems.reduce((total, item) => {
            return total + item.quantity;
        }, 0);

        setCount(newTotalQuantity);
    };

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
            }}
        >
            {children}
        </Context.Provider>
    );
};

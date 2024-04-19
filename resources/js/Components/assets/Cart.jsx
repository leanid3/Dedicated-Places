import React from "react";
export default function Cart(item) {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Получаем данные из локального хранилища при загрузке компонента
        const storedCartItems = localStorage.getItem("cartItems");
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, []);

    // Функция для добавления товара в корзину
    const addToCart = (item) => {
        const updatedCart = [...cartItems, item];
        setCartItems(updatedCart);
        // Сохраняем обновленную корзину в локальном хранилище
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    };

    // Функция для удаления товара из корзины
    const removeFromCart = (itemId) => {
        const updatedCart = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedCart);
        // Сохраняем обновленную корзину в локальном хранилище
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    };

    return (
        <div>
            <h2>Корзина</h2>
            {cartItems.length === 0 ? (
                <p>Корзина пуста</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            {item.name} - {item.price}
                            <button onClick={() => removeFromCart(item.id)}>
                                Удалить
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

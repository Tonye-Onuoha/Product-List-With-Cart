import { useState } from "react";
import Desserts from "./Desserts";
import Cart from "./Cart";
import OrderConfirmed from "./OrderConfirmed";
import Overlay from "./Overlay";
import { OrdersContext } from "../Context";
import { selectedProductsStore } from "../store";

export default function ProductList() {
    const [orders, setOrders] = useState([]);
    const [orderIsConfirmed, setOrderIsConfirmed] = useState(false);

    let orderTotal = 0,
        cartTotal = 0;

    if (orders.length > 0) {
        orders.forEach((order) => {
            orderTotal += order.cost;
            cartTotal += order.quantity;
        });
    }

    function handleOrders(newOrder) {
        setOrders([...orders, newOrder]);
    }

    function UpdateOrders(updatedOrders) {
        setOrders(updatedOrders);
    }

    function removeOrder(orderID) {
        const filteredOrders = orders.filter((order) => order.id !== orderID);
        setOrders(filteredOrders);
    }

    function handleConfirmOrder() {
        window.scrollTo(0, 0);
        setOrderIsConfirmed(true);
    }

    function handleNewOrder() {
        selectedProductsStore.clear();
        setOrders([]);
        setOrderIsConfirmed(false);
    }

    return (
        <>
            <div className="product-list">
                <OrdersContext
                    value={{
                        orders: orders,
                        removeOrder: removeOrder,
                        handleOrders: handleOrders,
                        UpdateOrders: UpdateOrders,
                        handleConfirmOrder: handleConfirmOrder
                    }}>
                    <Desserts />
                    <Cart orders={orders} cartTotal={cartTotal} orderTotal={orderTotal} />
                </OrdersContext>
            </div>
            {orderIsConfirmed && <Overlay />}
            {orderIsConfirmed && <OrderConfirmed orders={orders} orderTotal={orderTotal} onNewOrder={handleNewOrder} />}
        </>
    );
}

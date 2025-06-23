import { useState, useContext, useEffect } from "react";
import { OrdersContext } from "../Context";
import AddButton from "./buttons/AddButton";
import OrderButton from "./buttons/OrderButton";

export default function DessertButton({ category, isSelected }) {
    const [itemCount, setItemCount] = useState(1);
    const { orders, UpdateOrders } = useContext(OrdersContext);

    function handleDecrementClick() {
        if (itemCount === 1) return;
        setItemCount(itemCount - 1);
        const updatedOrders = orders.map((order) => {
            if (order.category === category) {
                const itemPrice = (itemCount - 1) * order.price;
                const updatedOrder = { ...order, quantity: itemCount - 1, cost: itemPrice };
                return updatedOrder;
            } else return order;
        });
        UpdateOrders(updatedOrders);
    }

    function handleIncrementClick() {
        setItemCount(itemCount + 1);
        const updatedOrders = orders.map((order) => {
            if (order.category === category) {
                const itemPrice = (itemCount + 1) * order.price;
                const updatedOrder = { ...order, quantity: itemCount + 1, cost: itemPrice };
                return updatedOrder;
            } else return order;
        });
        UpdateOrders(updatedOrders);
    }

    useEffect(() => {
        if (orders.length === 0 && itemCount !== 1) {
            setItemCount(1);
        }
    });

    if (isSelected) {
        return (
            <OrderButton
                itemCount={itemCount}
                onDecrementClick={handleDecrementClick}
                onIncrementClick={handleIncrementClick}
            />
        );
    }
    return <AddButton itemCount={itemCount} />;
}

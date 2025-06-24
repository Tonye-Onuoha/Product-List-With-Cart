import { useContext } from "react";
import { OrdersContext } from "../Context";
import removeItemIcon from "../assets/images/close-circle-outline.svg";
import { selectedProductsStore } from "../store";

export default function OrderItem({ order }) {
    const { removeOrder } = useContext(OrdersContext);
    const { id, category, name, price, quantity, cost } = order;

    function handleRemoveOrder() {
        selectedProductsStore.delete(category); // remove the category of a selected product from the global store.
        removeOrder(id); // remove a previous order.
    }
    return (
        <div className="order-item">
            <div className="item">
                <p className="item__name">{name}</p>
                <div className="item__cost-container">
                    <span className="item-count">{quantity}x</span>
                    <span className="item-price">@ ${price.toFixed(2)}</span>
                    <span className="item-total">${cost.toFixed(2)}</span>
                </div>
            </div>
            <img
                src={removeItemIcon}
                onClick={handleRemoveOrder}
                onMouseEnter={(e) => {
                    e.currentTarget.style.cursor = "pointer";
                    e.currentTarget.src = "./assets/close-circle-outline-hover.svg";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.cursor = "default";
                    e.currentTarget.src = "./assets/close-circle-outline.svg";
                }}></img>
        </div>
    );
}

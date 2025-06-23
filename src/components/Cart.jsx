import { useContext } from "react";
import { OrdersContext } from "../Context";
import OrderItem from "./OrderItem";
import emptyCartImage from "../assets/images/illustration-empty-cart.svg";
import carbonNeutralImage from "../assets/images/icon-carbon-neutral.svg";

export default function Cart({ orders, cartTotal, orderTotal }) {
    const { handleConfirmOrder } = useContext(OrdersContext);
    return (
        <div className="cart">
            <h2 className="cart__heading">Your Cart ({cartTotal})</h2>
            {cartTotal === 0 && (
                <div className="cart__empty-content">
                    <img src={emptyCartImage}></img>
                    <p className="cart__text">Your added items will appear here</p>
                </div>
            )}
            {cartTotal > 0 && orders.map((order, index) => <OrderItem key={order.id} order={order} />)}
            {cartTotal > 0 && (
                <div className="order-total">
                    <div className="order-total__text">
                        <p className="order-total__label">Order Total</p>
                        <h1 className="order-total__cost">${orderTotal.toFixed(2)}</h1>
                    </div>
                    <div className="carbon-neutral">
                        <img src={carbonNeutralImage}></img>
                        <p>
                            This is a <span className="carbon-neutral__text">carbon neutral</span> delivery
                        </p>
                    </div>
                    <button
                        type="button"
                        className="confirm-button"
                        onClick={handleConfirmOrder}
                        onMouseEnter={(e) => (e.currentTarget.style.cursor = "pointer")}
                        onMouseLeave={(e) => (e.currentTarget.style.cursor = "default")}>
                        Confirm Order
                    </button>
                </div>
            )}
        </div>
    );
}

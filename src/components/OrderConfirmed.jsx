import ConfirmedItem from "./ConfirmedItem";
import confirmedIcon from "../assets/images/icon-order-confirmed.svg";

export default function OrderConfirmed({ orders, orderTotal, onNewOrder }) {
    return (
        <div
            className={
                window.innerWidth >= 1200
                    ? "order-confirmed-container order-confirmed-container--desktop"
                    : "order-confirmed-container"
            }>
            <img src={confirmedIcon} alt="green checkmark icon"></img>
            <h1 className="order-confirmed__heading">Order Confirmed</h1>
            <p className="order-confirmed__text">We hope you enjoy your food!</p>
            <div className="confirmed-orders">
                {orders.map((order) => (
                    <ConfirmedItem key={order.id} item={order} />
                ))}
                <div className="order-total__text">
                    <p className="order-total__label">Order Total</p>
                    <h1 className="order-total__cost">${orderTotal.toFixed(2)}</h1>
                </div>
            </div>
            <button
                type="button"
                className="new-order-button"
                onClick={onNewOrder}
                onMouseEnter={(e) => (e.currentTarget.style.cursor = "pointer")}
                onMouseLeave={(e) => (e.currentTarget.style.cursor = "default")}>
                Start New Order
            </button>
        </div>
    );
}

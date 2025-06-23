import { confirmedOrderClass } from "../utils";

import icon from "../assets/images/image-waffle-thumbnail.jpg";

export default function ConfirmedItem({ item }) {
    return (
        <div className="confirmed-item">
            <div className="confirmed-item__container">
                <div className={"confirmed-thumbnail " + confirmedOrderClass(item.category)}></div>
                <div className="confirmed-item__content">
                    <p className="item__name">{item.name.length > 18 ? item.name.slice(0, 18) + "..." : item.name}</p>
                    <div className="item__cost-container">
                        <span className="item-count">{item.quantity}x</span>
                        <span className="item-price">@ ${item.price.toFixed(2)}</span>
                    </div>
                </div>
            </div>
            <span className="item-total">${item.cost.toFixed(2)}</span>
        </div>
    );
}

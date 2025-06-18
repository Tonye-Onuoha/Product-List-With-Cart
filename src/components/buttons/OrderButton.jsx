import { useState } from "react";
import decrementIcon from "../../assets/images/icon-decrement-quantity.svg";
import incrementIcon from "../../assets/images/icon-increment-quantity.svg";

export default function OrderButton() {
    const [itemCount, setItemCount] = useState(0);

    function handleDecrementClick() {
        if (itemCount === 0) return;
        setItemCount(itemCount - 1);
    }

    function handleIncrementClick() {
        setItemCount(itemCount + 1);
    }

    return (
        <div className="button order-button">
            <img src={decrementIcon} onClick={handleDecrementClick}></img>
            <span className="order-button__item-count">{itemCount}</span>
            <img src={incrementIcon} onClick={handleIncrementClick}></img>
        </div>
    );
}

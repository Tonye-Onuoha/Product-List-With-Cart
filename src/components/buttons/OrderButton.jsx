import decrementIcon from "../../assets/images/remove-circle-outline.svg";
import incrementIcon from "../../assets/images/add-circle-outline.svg";

export default function OrderButton({ itemCount, onDecrementClick, onIncrementClick }) {
    return (
        <div className="button order-button">
            <img
                src={decrementIcon}
                onClick={onDecrementClick}
                onMouseEnter={(e) => {
                    e.currentTarget.style.cursor = "pointer";
                    e.currentTarget.src = "./src/assets/images/remove-circle-outline-hover.svg";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.cursor = "default";
                    e.currentTarget.src = "./src/assets/images/remove-circle-outline.svg";
                }}></img>
            <span className="order-button__item-count">{itemCount}</span>
            <img
                src={incrementIcon}
                onClick={onIncrementClick}
                onMouseEnter={(e) => {
                    e.currentTarget.style.cursor = "pointer";
                    e.currentTarget.src = "./src/assets/images/add-circle-outline-hover.svg";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.cursor = "default";
                    e.currentTarget.src = "./src/assets/images/add-circle-outline.svg";
                }}></img>
        </div>
    );
}

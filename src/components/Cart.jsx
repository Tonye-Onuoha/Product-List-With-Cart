import emptyCartImage from "../assets/images/illustration-empty-cart.svg";

export default function Cart() {
    return (
        <div className="cart">
            <h2 className="cart__heading">Your Cart (0)</h2>
            <div className="cart__empty-content">
                <img src={emptyCartImage}></img>
                <p className="cart__text">Your added items will appear here</p>
            </div>
        </div>
    );
}

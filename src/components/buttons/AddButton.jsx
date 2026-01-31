import { useContext } from "react";
import { OrdersContext, DessertContext } from "../../Context";
import cartAddIcon from "../../assets/images/icon-add-to-cart.svg";
import { orderIdGenerator } from "../../utils";
import { selectedProductsStore } from "../../store";

export default function AddButton({ itemCount }) {
    const { handleOrders } = useContext(OrdersContext);
    const dessert = useContext(DessertContext);

    function handleClick() {
        const itemPrice = itemCount * dessert.price;
        const order = {
            id: orderIdGenerator(),
            category: dessert.category,
            name: dessert.name,
            price: dessert.price,
            quantity: itemCount,
            cost: itemPrice
        };
        selectedProductsStore.add(dessert.category); // add the category of the selected product to the global store.
        handleOrders(order); // create a new order.
    }
    return (
        <div className="button add-button" onClick={handleClick}>
            <img src={cartAddIcon} alt="cart icon"></img>
            <p className="add-button__text">Add to Cart</p>
        </div>
    );
}

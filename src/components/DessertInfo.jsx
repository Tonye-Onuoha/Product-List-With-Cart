import { useContext } from "react";
import { DessertContext } from "../Context";

export default function DessertInfo() {
    const { category, name, price } = useContext(DessertContext);

    return (
        <div className="dessert-info">
            <p className="dessert-info__category">{category}</p>
            <p className="dessert-info__name">{name}</p>
            <p className="dessert-info__price">${price.toFixed(2)}</p>
        </div>
    );
}

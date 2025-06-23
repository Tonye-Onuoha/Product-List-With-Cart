import { useContext } from "react";
import DessertButton from "./DessertButton";
import { DessertContext } from "../Context";
import { dessertImageClass } from "../utils";

export default function DessertImage({ isSelected }) {
    const { category } = useContext(DessertContext);

    if (isSelected) {
        return (
            <div className="dessert-image-container">
                <div className={dessertImageClass(category) + " selected"}></div>
                <DessertButton category={category} isSelected={isSelected} />
            </div>
        );
    }
    return (
        <div className="dessert-image-container">
            <div className={dessertImageClass(category)}></div>
            <DessertButton category={category} isSelected={isSelected} />
        </div>
    );
}

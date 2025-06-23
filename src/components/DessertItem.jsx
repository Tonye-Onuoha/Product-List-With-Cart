import DessertImage from "./DessertImage";
import DessertInfo from "./DessertInfo";
import { DessertContext } from "../Context";
import { selectedProductsStore } from "../store";

export default function DessertItem({ dessert }) {
    const isSelected = selectedProductsStore.has(dessert.category);

    return (
        <div className="dessert-item">
            <DessertContext value={dessert}>
                <DessertImage isSelected={isSelected} />
                <DessertInfo />
            </DessertContext>
        </div>
    );
}

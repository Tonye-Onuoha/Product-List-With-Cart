import DessertImage from "./DessertImage";
import DessertButton from "./DessertButton";
import DessertInfo from "./DessertInfo";

export default function DessertItem() {
    return (
        <div className="dessert-item">
            <DessertImage />
            <DessertButton />
            <DessertInfo />
        </div>
    );
}

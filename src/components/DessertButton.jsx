import AddButton from "./buttons/AddButton";
import OrderButton from "./buttons/OrderButton";

export default function DessertButton({ isSelected }) {
    if (isSelected) {
        return <OrderButton />;
    }
    return <AddButton />;
}

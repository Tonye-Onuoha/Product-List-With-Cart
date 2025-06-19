import DessertItem from "./DessertItem";

export default function DessertsList({ desserts }) {
    return (
        <div className="desserts-list">
            {desserts.map((dessert) => (
                <DessertItem key={dessert.category} dessert={dessert} />
            ))}
        </div>
    );
}

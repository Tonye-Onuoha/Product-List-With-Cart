import { useState, useEffect } from "react";
import DessertsList from "./DessertsList";

export default function Desserts() {
    const [desserts, setDesserts] = useState([]);

    useEffect(() => {
        let ignore = false;
        async function fetchDesserts() {
            const response = await fetch("http://localhost:5173/data.json");
            const data = await response.json();
            if (!ignore) setDesserts(data);
        }
        fetchDesserts();
        return () => (ignore = true);
    }, []);

    if (desserts.length === 0) {
        return <p>No available desserts!</p>;
    }

    return (
        <div className="desserts-container">
            <h1 className="desserts-container__heading">Desserts</h1>
            <DessertsList desserts={desserts} />
        </div>
    );
}

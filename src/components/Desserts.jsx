import { useState, useEffect } from "react";
import DessertsList from "./DessertsList";

export default function Desserts() {
    const [desserts, setDesserts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let ignore = false;
        async function fetchDesserts() {
            try {
                const response = await fetch("https://product-list-with-cart-gray.vercel.app/data.json");
                const data = await response.json();
                if (!ignore) {
                    setDesserts(data);
                    setLoading(false);
                }
            } catch (err) {
                setError("Sorry, unable to fetch desserts at the moment.");
                setLoading(false);
            }
        }
        fetchDesserts();
        return () => (ignore = true);
    }, []);

    if (desserts.length === 0 && loading) {
        return (
            <div
                className="desserts-container"
                style={{
                    paddingTop: "50px",
                    paddingBottom: "50px",
                    backgroundColor: "lightgray",
                    borderRadius: "10px"
                }}>
                <h2 className="loading-text">Please wait, loading available desserts...</h2>
            </div>
        );
    }

    if (desserts.length === 0 && error) {
        return (
            <div
                className="desserts-container"
                style={{
                    paddingTop: "50px",
                    paddingBottom: "50px",
                    backgroundColor: "lightgray",
                    borderRadius: "10px"
                }}>
                <h2 className="error-text">{error}</h2>
            </div>
        );
    }

    return (
        <div className="desserts-container">
            <h1 className="desserts-container__heading">Desserts</h1>
            <DessertsList desserts={desserts} />
        </div>
    );
}

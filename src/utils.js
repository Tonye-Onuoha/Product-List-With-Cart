export const dessertImageClass = (value) => {
    if (value.includes(" ")) {
        const [first, last] = value.split(" ");
        return "dessert-image " + `${first}-${last}`.toLowerCase();
    }
    return "dessert-image " + value.toLowerCase();
};

export const confirmedOrderClass = (value) => {
    if (value.includes(" ")) {
        const [first, last] = value.split(" ");
        return `${first}-${last}`.toLowerCase() + "-thumbnail";
    }
    return value.toLowerCase() + "-thumbnail";
};

let orderID = 0;

export const orderIdGenerator = () => ++orderID;

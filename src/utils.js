export const classNameSetter = (value) => {
    if (value.includes(" ")) {
        const [first, last] = value.split(" ");
        return "dessert-image " + `${first}-${last}`.toLowerCase();
    }
    return "dessert-image " + value.toLowerCase();
};

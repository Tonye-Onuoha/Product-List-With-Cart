import cartAddIcon from "../../assets/images/icon-add-to-cart.svg";

export default function AddButton() {
    return (
        <div className="button add-button">
            <img src={cartAddIcon}></img>
            <p className="add-button__text">Add to Cart</p>
        </div>
    );
}

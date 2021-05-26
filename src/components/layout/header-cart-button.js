import { useContext } from "react";
import CartContext from "../../context/cartContext";
import CartIcon from "../cart/cart-icon";
import styles from "./header-cart-button.module.css";

const HeaderCartButton = (props) =>{

    const cartContext = useContext(CartContext);

    return (
        <button onClick={props.onClick} className={styles.button}>
            <span className={styles.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>{cartContext.totalAmount.toFixed(2)}</span>
        </button>
    );
};

export default HeaderCartButton;
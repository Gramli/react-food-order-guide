import CartIcon from "../cart/cart-icon";
import styles from "./header-cart-button.module.css";

const HeaderCartButton = (props) =>{

    return (
        <button className={styles.button}>
            <span className={styles.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>3</span>
        </button>
    );
};

export default HeaderCartButton;
import { useContext, useEffect, useState } from "react";
import CartContext from "../../context/cartContext";
import CartIcon from "../cart/cart-icon";
import styles from "./header-cart-button.module.css";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);
  const [btnHighlight, setBtnHighlight] = useState(false);
  const { meals } = cartContext;

  const btnStyles = `${styles.button} ${btnHighlight ? styles.bump : ""}`;

  useEffect(() => {
    if (meals.length === 0) {
      return;
    }
    setBtnHighlight(true);
    const timer = setTimeout(() => {
      setBtnHighlight(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [meals]);

  return (
    <button onClick={props.onClick} className={btnStyles}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{cartContext.totalAmount.toFixed(2)}</span>
    </button>
  );
};

export default HeaderCartButton;

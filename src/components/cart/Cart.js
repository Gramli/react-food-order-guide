import styles from "./Cart.module.css";
import Modal from "../ui/modal";
import { useContext } from "react";
import CartContext from "../../context/cartContext";

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const cartitems = (
    <ul className={styles["cart-items"]}>
      {cartContext.meals.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClick={props.onClose}>
      {cartitems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>32.65</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;

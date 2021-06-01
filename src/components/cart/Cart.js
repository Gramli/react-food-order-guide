import styles from "./Cart.module.css";
import Modal from "../ui/modal";
import { useContext } from "react";
import CartContext from "../../context/cartContext";
import CartItem from './CartItem';

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const addItemHandler = (item) => {
    cartContext.addMeal({
      ...item,
      amount: 1,
    });
  };

  const removeItemHandler = (item) => {
    cartContext.removeMeal(item);
  };


  const cartitems = (
    <ul className={styles["cart-items"]}>
      {cartContext.meals.map((item) => (
        <CartItem key={item.id} name={item.name} price={item.price} amount={item.amount} onAdd={addItemHandler.bind(null, item)} onRemove={removeItemHandler.bind(null, item)}/>
      ))}
    </ul>
  );

  const totalAmount = `${cartContext.totalAmount.toFixed(2)} CZK`;
  const hasItems = cartContext.meals.length > 0;

  return (
    <Modal onClick={props.onClose}>
      {cartitems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;

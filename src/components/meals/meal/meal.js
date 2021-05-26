import { useState, useContext } from "react";
import styles from './meal.module.css';
import MealForm from "./mealForm";
import CartContext from '../../../context/cartContext';

const Meal = (props) => {

    const cartContext = useContext(CartContext);

    const price = `${props.price} CZK`;

    const onSubmitHandler = (amount)=>{
        cartContext.addMeal({
            id: props.id,
            name: props.name,
            price: props.price,
            description: props.description,
            amount: amount,
        });
    };

    return (
        <li className={styles.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.price}>{price}</div>
            </div>
            <div>
                <MealForm onSubmit={onSubmitHandler} id={props.id}/>
            </div>
        </li>
    );
};

export default Meal;
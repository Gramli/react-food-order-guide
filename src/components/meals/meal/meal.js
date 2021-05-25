import { useState } from "react";
import styles from './meal.module.css';
import MealForm from "./mealForm";

const Meal = (props) => {

    const price = `${props.price} CZK`;

    return (
        <li className={styles.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.price}>{price}</div>
            </div>
            <div>
                <MealForm id={props.id}/>
            </div>
        </li>
    );
};

export default Meal;
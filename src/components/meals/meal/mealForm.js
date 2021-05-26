import { useState } from 'react';
import Input from '../../ui/input';
import styles from './mealForm.module.css';

const MealForm = (props) => {

    const [amount, setAmount] = useState(0);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        props.onSubmit(amount);
    };

    return (
        <form className={styles.form} onSubmit={onSubmitHandler}>
            <Input title="Amount" onChange={(value)=> setAmount(+value)} input={{
                id:"amount_" + props.id,
                type:"number",
                step:"1",
                defaultValue:"0",
                min:"1",
                max:"5"
            }} />
            <button type="submit">Add</button>
        </form>
    );
};

export default MealForm;
import { useRef, useState } from 'react';
import Input from '../../ui/input';
import styles from './mealForm.module.css';

const MealForm = (props) => {

    const [amountValid, setamountValid] = useState(true);
    const amountInputRef = useRef();

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber =+enteredAmount;
        if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
            setamountValid(false);
            return;
        }

        setamountValid(true);
        props.onSubmit(enteredAmountNumber);
    };

    return (
        <form className={styles.form} onSubmit={onSubmitHandler}>
            <Input title="Amount" ref={amountInputRef} input={{
                id:"amount_" + props.id,
                type:"number",
                step:"1",
                defaultValue:"0",
                min:"1",
                max:"5"
            }} />
            <button type="submit">Add</button>
            {!amountValid && <p>Please eneter a valid amount.</p>}
        </form>
    );
};

export default MealForm;
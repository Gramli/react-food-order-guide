import { useState } from 'react';
import Input from '../../ui/input';
import styles from './mealForm.module.css';

const MealForm = (props) => {
    return (
        <form className={styles.form}>
            <Input title="Amount" input={{
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
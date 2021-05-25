import { useState } from 'react';
import styles from './input.module.css';

const Input = (props) => {

    const [amount, setAmount] = useState(0);

    return (
        <div className={styles.input}>
            <label htmlFor={props.input.id}>{props.title}</label>
            <input {...props.input} value={amount} onChange={(event) => setAmount(+event.target.value)}></input>
        </div>);
};

export default Input;
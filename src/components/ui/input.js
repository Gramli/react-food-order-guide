import { useState } from 'react';
import styles from './input.module.css';

const Input = (props) => {
    return (
        <div className={styles.input}>
            <label htmlFor={props.input.id}>{props.title}</label>
            <input {...props.input} onChange={(event) => props.onChange(event.target.value)}></input>
        </div>);
};

export default Input;
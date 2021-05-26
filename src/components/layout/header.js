import styles from './header.module.css';
import mealsPicture from '../../assets/meals.jpg';
import HeaderCartButton from './header-cart-button';

const Header = (props) => {
    return (
        <>
        <header className={styles.header}>
            <h1>React Guide Meals Order</h1>
            <HeaderCartButton onClick={props.onCartClick}>Cart</HeaderCartButton>
        </header>
        <div className={styles["main-image"]}>
            <img src={mealsPicture} alt="food table"/>
        </div>
        </>
    );
}

export default Header;
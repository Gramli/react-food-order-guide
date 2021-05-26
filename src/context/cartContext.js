import React, { useState } from 'react';

const CartContext = React.createContext({
    meals: [],
    addMeal: (meal) => {},
    removeMeal: (meal) =>{},
});

export const CartContextProviver = (props) =>{
    const [meals, setMeals] = useState([]);

    const addMealHandler = (meal) =>{
        setMeals((prev)=> [...prev, meal]);
    };

    const removeMealHandler = (meal) =>{
        setMeals((prev)=> prev.filter(item=> item.id != meal.id));
    };

    return (
        <CartContext.Provider value={{
            meals: meals,
            addMeal: addMealHandler,
            removeMeal: removeMealHandler,
        }}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartContext;
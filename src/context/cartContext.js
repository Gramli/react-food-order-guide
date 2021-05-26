import React, { useReducer } from 'react';

const CartContext = React.createContext({
    meals: [],
    totalAmount: 0,
    addMeal: (meal) => { },
    removeMeal: (meal) => { },
});

const cartReducer = (state, action) => {
    switch (action.type) {
        case "add":
            return {
                meals: [...state.meals, action.payload],
                totalAmount: state.totalAmount + action.payload.amount * action.payload.price,
            }
        case "remove":
            const actualMeals = state.meals.filter(item => item.id != action.payload.id);
            return {
                meals: actualMeals,
                totalAmount: actualMeals.reduce((aktVal, curVal) => aktVal + curVal.amount * curVal.price),
            }
    }
};

export const CartContextProviver = (props) => {

    const [cartState, cartStateDispatch] = useReducer(cartReducer, {
        meals: [],
        totalAmount: 0,
    })

    const addMealHandler = (meal) => {
        cartStateDispatch({ type: 'add', payload: meal })
    };

    const removeMealHandler = (meal) => {
        cartStateDispatch({ type: 'remove', payload: meal })
    };

    return (
        <CartContext.Provider value={{
            meals: cartState.meals,
            addMeal: addMealHandler,
            removeMeal: removeMealHandler,
            totalAmount: cartState.totalAmount,
        }}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartContext;
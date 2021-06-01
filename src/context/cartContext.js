import React, { useReducer } from "react";

const CartContext = React.createContext({
  meals: [],
  totalAmount: 0,
  addMeal: (meal) => {},
  removeMeal: (meal) => {},
});

//reduce must be pure
//its called twice
const cartReducer = (state, action) => {
  switch (action.type) {
    case "add":
      const totalAmount =
        state.totalAmount + action.payload.amount * action.payload.price;
      const existingMealIndex = state.meals.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingMealItem = state.meals[existingMealIndex];

      let updatedItems;

      if (existingMealItem) {
        const updatedItem = {
          ...existingMealItem,
          amount: existingMealItem.amount + action.payload.amount,
        };

        updatedItems = [...state.meals];
        updatedItems[existingMealIndex] = updatedItem;
      } else {
        updatedItems = state.meals.concat(action.payload);
      }

      return {
        meals: updatedItems,
        totalAmount: totalAmount,
      };
    case "remove": {
      let updatedMeals = [];
      const existingMealIndex = state.meals.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingMealItem = state.meals[existingMealIndex];

      if (existingMealItem) {
        const updatedItem = {
          ...existingMealItem,
          amount: existingMealItem.amount - 1,
        };

        if (updatedItem.amount === 0) {
          updatedMeals = state.meals.filter(
            (meal) => meal.id !== action.payload.id
          );
        } else {
          updatedMeals = [...state.meals];
          updatedMeals[existingMealIndex] = updatedItem;
        }
      }

      const totalAmount = updatedMeals.reduce(
        (aktVal, curVal) => aktVal + curVal.amount * curVal.price,
        0
      );

      return {
        meals: updatedMeals,
        totalAmount: totalAmount,
      };
    }
  }
};

export const CartContextProviver = (props) => {
  const [cartState, cartStateDispatch] = useReducer(cartReducer, {
    meals: [],
    totalAmount: 0,
  });

  const addMealHandler = (meal) => {
    cartStateDispatch({ type: "add", payload: meal });
  };

  const removeMealHandler = (meal) => {
    cartStateDispatch({ type: "remove", payload: meal });
  };

  return (
    <CartContext.Provider
      value={{
        meals: cartState.meals,
        addMeal: addMealHandler,
        removeMeal: removeMealHandler,
        totalAmount: cartState.totalAmount,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;

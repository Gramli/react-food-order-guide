import { useState } from "react";
import Cart from "./components/cart/Cart";
import Header from "./components/layout/header";
import Meals from "./components/meals/meals";

const App = () => {
  
  const [makeOrder, setMakeOrder] = useState(false);

  const onModalCloseHandler =(value)=>{
    setMakeOrder(value);
  };
  
  return (
    <>
      {makeOrder && <Cart onClose={() => onModalCloseHandler(false)}/>}
      <Header onCartClick={() => onModalCloseHandler(true)}/>
      <main>
        <Meals />
      </main>
    </>
  );
};

export default App;

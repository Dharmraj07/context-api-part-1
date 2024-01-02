import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext(null);

const useCart=()=>{
    const cart=useContext(CartContext);
    return cart;

}

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  return (
    <CartContext.Provider value={{ items, setItems }}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext ,useCart};

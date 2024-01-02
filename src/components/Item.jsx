import React, { useContext } from 'react'
import {  useCart } from '../context/Cart'

const Item = ({name,price}) => {
    const cart=useCart();
    console.log(cart);
  return (
    <div className='item-card'>
      <h3> {name} </h3>
      <p> price : ${price} </p>
      <button onClick={()=> cart.setItems([...cart.items,{name,price}])}>Add To Cart</button>
    </div>
  )
}

export default Item

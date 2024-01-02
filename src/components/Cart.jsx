import React from 'react';
import { useCart } from '../context/Cart'

const Cart = () => {
  const cart=useCart();

  // Function to calculate the total bill without using reduce
  const calculateTotalBill = () => {
    let total = 0;
    for (const item of cart.items) {
      total += item.price;
    }
    return total.toFixed(2);
  };

  const totalBill=()=>{
    return cart.items.reduce((total,item)=> total+item.price,0).toFixed(2);
  }
  
  return (
    <div className='cart'>
      <h2>*****Shoping Cart*****</h2>
      {
        cart && cart.items.map((item)=> <li> {item.name} --${item.price} </li> )
      }

      <li>MacBook Pro</li>
      <h3>Total Bill : ${totalBill()} </h3>
      
    </div>
  )
}

export default Cart

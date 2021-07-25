import React from 'react'
import Plate from './Plate'

const Cart = ({cart,setCart}) => {
    const total = cart.reduce((acc,total)=> acc + total.price,0)
    console.log('total',total)
  return (
    <div>
      <h3>Carrrito</h3>
       {cart.length ===0 ? 
       (<h3>NO ITEMS on the Cart</h3>)
       :(cart.map((plate,i)=> 
       <Plate 
       key={i}
       plate={plate}
       cart={cart}
       setCart={setCart}
       />))}
       {total}
    </div>
  )
}

export default Cart

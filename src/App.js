import React ,{useState}from 'react'
import  Plate from './Plate'
import Cart from './Cart'
import './App.css';

function App() {
 const [plates, setPlates] = useState([
   {id:1,name: 'Oferta1',price:10},{
    id:2,name: 'Oferta2',price:10
   },{
    id:3,name: 'Oferta3',price:10
   },{
    id:4,name: 'Oferta4',price:10
   },{
    id:5,name: 'Oferta5',price:10
   }
 ])
 const [cart, setCart] = useState([])
 console.log('cart', cart)
  return (
      <>
       {plates.map((plate,i)=>{
    
      return (
       <Plate 
         key={i}
         plate={plate}
         cart={cart}
         setCart={setCart}
         plates={plates}
         />
      
      )
       })}
       <Cart
       cart={cart}
       setCart={setCart}
       />
    </>
  );
}

export default App;

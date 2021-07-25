import React from 'react'

const Plate = ({plate,cart,setCart,plates}) => {
    const {name,price , id} = plate

    const addPlate = (id)=> {
      const food = plates.filter(food => food.id ===id)
     setCart([...cart, ...food])
     
    }

    const deletePlate = (id)=> {
      const deleteP = cart.filter(plate => plate.id !==id)
      setCart(deleteP)
    }
    
  return (
    <div>
      <ul>
          <li>{name}</li>
          <li>{price}</li>
          <li>{id}</li>
          {plates ? (<button onClick={()=>addPlate(id)}>Agregar</button>)
          :(<div>
           <button onClick={()=>deletePlate(id)}>eliminar</button>
           <button onClick={()=>console.log(price)}>+</button>
          </div>
          ) 
          }
          
      </ul>
    </div>
  )
}

export default Plate
